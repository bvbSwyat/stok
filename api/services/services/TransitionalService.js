/**
 * Created by swyat on 19.05.15.
 */
var request = require("request");

module.exports = {
    randString: function(count) {
        var string = "";
        while (string.length < count && count > 0) {
            var r = Math.random();
            string += (r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
        }
        return string;
    },

    createEntity: function (shopId) {
        //var defaultLogo = "http://t1.gstatic.com/shopping?q=tbn:ANd9GcQeykeRr4I-1qYSDLB22DdR8WozQGyzRbC5FgyZzOj_GzKCFQhG7-2S3qK4tb4&usqp=CAI"
        var params = {
            shop: shopId,
            logo: '',
            images: []
        };
        ShopMedia.create(params).exec(function (err, result) {
            if (err) return res.send(500);
            Shop.update(shopId, {media: result.id}).exec(function (err) {
                if (err) return res.send(500);
                return true;
            })
        });
    },

    getGoodsList: function () {
        Goods.find()
            .sort('id DESC')
            .exec(function (err, wides) {
                if (err) return res.send(500);
                return wides;
            });
    },

    setPrice: function (responce) {
        Shop.find()
            .sort('id DESC')
            .exec(function (err, shops) {
                if (err) {
                    return responce.send(500);
                } else {
                    if (shops.length > 0) {
                        GeneralInfo.find()
                            .sort('id DESC')
                            .limit(1)
                            .exec(function (err, info) {
                                if (info.length == 0) {
                                    var params = {
                                        max_price: FiltersService.getMaxPrice(responce),
                                        min_price: 0,
                                        mo_min_price: 0,
                                        tu_min_price: 0,
                                        we_min_price: 0,
                                        th_min_price: 0,
                                        fr_min_price: 0,
                                        sa_min_price: 0,
                                        su_min_price: 0,
                                        mo_max_price: responce['p_mo'],
                                        tu_max_price: responce['p_tu'],
                                        we_max_price: responce['p_we'],
                                        th_max_price: responce['p_th'],
                                        fr_max_price: responce['p_fr'],
                                        sa_max_price: responce['p_sa'],
                                        su_max_price: responce['p_su']
                                    };
                                    GeneralInfo.create(params).exec(function (err, result) {
                                        if (err) return result.send(500);
                                    })
                                } else {
                                    var rawId = info[0].id;
                                    var shopPriceDays = {
                                        'p_mo': {
                                            mo_min_price: 0,
                                            mo_max_price: 0
                                        },
                                        'p_tu': {
                                            tu_min_price: 0,
                                            tu_max_price: 0
                                        },
                                        'p_we': {
                                            we_min_price: 0,
                                            we_max_price: 0
                                        },
                                        'p_th': {
                                            th_min_price: 0,
                                            th_max_price: 0
                                        },
                                        'p_fr': {
                                            fr_min_price: 0,
                                            fr_max_price: 0
                                        },
                                        'p_sa': {
                                            sa_min_price: 0,
                                            sa_max_price: 0
                                        },
                                        'p_su': {
                                            su_min_price: 0,
                                            su_max_price: 0
                                        }
                                    }
                                    var minPrice = 0;
                                    var maxPrice = 0;
                                    for (var shopIndex in shops) {
                                        var shop = shops[shopIndex];
                                        for (var dayName in shopPriceDays) {
                                            var shopPriceDayObj = shopPriceDays[dayName];
                                            var maxFlag = 0
                                            for (var priceType in shopPriceDayObj) {
                                                var priceValue = shopPriceDayObj[priceType];
                                                var isMaxPrice = maxFlag == 1;
                                                if (isMaxPrice) {
                                                    // set max price for every day;
                                                    if (shop[dayName] > priceValue) {
                                                        shopPriceDayObj[priceType] = shop[dayName];
                                                        // set general min price
                                                        if (shop[dayName] > maxPrice) {
                                                            maxPrice = shop[dayName];
                                                        }
                                                    }
                                                } else {
                                                    // set min price for every day;
                                                    if (shop[dayName] < priceValue || priceValue == 0) {
                                                        shopPriceDayObj[priceType] = shop[dayName];
                                                        // set general min price
                                                        if (shop[dayName] < minPrice || minPrice == 0) {
                                                            minPrice = shop[dayName];
                                                        }
                                                    }
                                                }
                                                maxFlag++;
                                            }
                                        }
                                    }
                                    // save values
                                    var params = {
                                        min_price: minPrice,
                                        max_price: maxPrice
                                    }
                                    for (var dayName in shopPriceDays) {
                                        for (var priceType in shopPriceDays[dayName]) {
                                            params[priceType] = shopPriceDays[dayName][priceType];
                                        }
                                    }
                                    GeneralInfo.update(rawId, params).exec(function (err, res) {
                                        if (err) return res.send(500);
                                    });
                                }
                            })
                    }
                }
            });
    },

    getShopsPerPage: function(currentPage, shopsList) {
        var lastShopIndex = currentPage * ConfigsService.shopsPerPage;
        var firstShopIndex = lastShopIndex - ConfigsService.shopsPerPage;
        return shopsList.splice(firstShopIndex, lastShopIndex);
    },

    getLocation: function(locAddress, callback) {

        var locURL = "https://geocode-maps.yandex.ru/1.x/?";
        var locPath = "geocode=Україна,Івано Франківськ," + locAddress; // + locAddress
        var locFormat = "&format=json";
        var locLang = "&lang=uk_UA";
        var locNumRes = "&results=1";

        var locFull = locURL + locPath + locFormat + locLang + locNumRes;

        request({
            url: encodeURI(locFull),
            json: true
        }, function (err, response, body) {
            if (err) return response.send(500);
            if (!err && response.statusCode === 200) {
                var location;
                try {
                    location = body.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
                } catch(e) {

                } finally {
                    callback(location);
                }
            }
        });
    },

    getGoodsIdsList: function(idsList) {
        var where = {$or: []};
        if (typeof idsList != 'string') {
            for (var index in idsList) {
                where.$or.push({id: idsList[index]});
            }
        } else if (typeof idsList == 'string') {
            where.$or.push({id: idsList});
        }
        return where;
    },

    countShopRating: function(shopId) {
        if (shopId != '') {
            var ratingsCount = 0;
            var ratingSum = 0;
            var middleRating = 0;
            Comments.find({shop: shopId, accept: true}).exec(function (err, commentsList) {
                ratingsCount = commentsList.length;
                for( var index in commentsList) {
                    var commentRating = commentsList[index].rating;
                    ratingSum += commentRating;
                }
                if (ratingsCount == 0) {
                    Rating.destroy({shop: shopId}).exec(function (err, response) {
                        if (err) return res.send(500);
                    });
                    return;
                }
                middleRating = Math.round(ratingSum / ratingsCount);

                Rating.findOne({shop: shopId}).exec(function (err, rating) {
                    var params = {
                        shop: shopId,
                        count: ratingsCount,
                        rating: middleRating
                    };
                    if (rating == undefined) {
                        Rating.create(params).exec(function (err, rating) {
                            Shop.update(shopId, {rating: rating.id}).exec(function (err, response) {
                                if (err) return res.send(500);
                            });
                            if (err) return res.send(500);
                        });
                    } else {
                        Rating.update(rating.id, params).exec(function (err, response) {
                            if (err) return res.send(500);
                        });
                    }
                });
            });
        }
    }

};