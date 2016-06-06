/**
 * Created by swyat on 19.05.15.
 */
module.exports = {
    getObject: function(array, name, value) {
        var obj = [];
        array.some(function(item) {
            if (typeof item[name] != 'undefined') {
                 if ((typeof value == 'undefined' && obj.length == 0)
                    || (typeof value != 'undefined' && item[name] == value && obj.length == 0)) {
                    return obj = item;
                }
            }
        });
        return obj;
    },
    getFiltersObj: function (filtersString) {
        var params = {};
        if (!!filtersString) {
            filtersString.split(';').forEach(function (pair) {
                pair = pair.split('=');
                if (pair[1] !== undefined) {
                    var key = decodeURIComponent(pair[0]),
                        val = decodeURIComponent(pair[1]),
                        val = val ? val.replace(/\++/g, ' ').trim() : '';
                    val = val ? val.split(',') : val;

                    if (key.length === 0) {
                        return;
                    }
                    if (params[key] === undefined) {
                        params[key] = val;
                    }
                    else {
                        if ("function" !== typeof params[key].push) {
                            params[key] = [params[key]];
                        }
                        params[key].push(val);
                    }
                }
            });
        }
        return params;
    },
    getDaysPriceObj: function(daysPriceArray) {
        var daysPrice = {};
        daysPriceArray.forEach(function(item) {
            var dayPricePair = item.split('_');
            if (dayPricePair.length == 2) {
                var mainMaxPrice = dayPricePair[1].split('-');
                if (mainMaxPrice.length == 2) {
                    daysPrice[dayPricePair[0]] = mainMaxPrice;
                }
            }
        });
        return daysPrice;
    },
    getRequestFilterObj: function(filtersObj) {
        var params = {};

        for (var item in filtersObj) {
            switch(item) {
                case 'goods': {
                    params[item] = {$in: filtersObj[item]}
                    break;
                }
                case 'size':
                case 'type':
                case 'wide': {
                    params[item] = filtersObj[item];
                    break;
                }
                case 'price':
                case 'days_price': {
                    if (item != 'days_price') {
                        var price = filtersObj[item][0].split('-');
                        var minPrice = parseInt(price[0]);
                        var maxPrice = parseInt(price[1]);
                        if (price.length == 2) {
                            params['$and'] = [
                                {p_mo: {$gte: minPrice, $lte: maxPrice}},
                                {p_tu: {$gte: minPrice, $lte: maxPrice}},
                                {p_we: {$gte: minPrice, $lte: maxPrice}},
                                {p_th: {$gte: minPrice, $lte: maxPrice}},
                                {p_fr: {$gte: minPrice, $lte: maxPrice}},
                                {p_sa: {$gte: minPrice, $lte: maxPrice}},
                                {p_su: {$gte: minPrice, $lte: maxPrice}}
                            ]
                        }
                    }
                    if (item == 'days_price') {
                        params['$and'] = typeof params['$and'] != 'undefined' ? params['$and'] : [];
                        var daysPrice = this.getDaysPriceObj(filtersObj[item]);
                        for (var dayName in daysPrice) {
                            var priceArray = daysPrice[dayName];
                            var minPrice = parseInt(priceArray[0]);
                            var maxPrice = parseInt(priceArray[1]);
                            var tableName = 'p_' + dayName;
                            var searchedObj = this.getObject(params['$and'], tableName)
                            if (typeof searchedObj.length > 0) {
                                searchedObj[tableName].$gte = minPrice;
                                searchedObj[tableName].$lte = maxPrice;
                            } else {
                                var orItem = {};
                                orItem[tableName] = {$gte: minPrice, $lte: maxPrice};
                                params['$and'].push(orItem)
                            }
                        }
                    }
                    break;
                }
            }
        }
        return params;
    },

    getSearchObj: function(searchText) {
        var query = {};
        if (searchText != undefined && searchText != "") {
            var searchReg = new RegExp(searchText, 'i');
            query['$or'] = [ { name: searchReg},
                            { address: searchReg },
                            { telephone: searchReg },
                            { site: searchReg },
                            { email: searchReg }];
        }
        return query;
    },

    hasMinMaxPriceDays: function(filtersObj) {
        if (filtersObj.max_price !== undefined || filtersObj.min_price !== undefined) {
            return true;
        }
        return false;
    },
    hasRatingFilter: function(filtersObj) {
        if (filtersObj.rating !== undefined) {
            return true;
        }
        return false;
    },
    getMaxPriceDay: function(shop) {
        var daysArray = ["p_mo", "p_tu", "p_we", "p_th", "p_fr", "p_sa", "p_su"];
        var maxPrice = 0;
        var maxPriceDay = undefined;
        for (var dayField in daysArray) {
            dayField = daysArray[dayField];
            if (shop[dayField] > maxPrice) {
                maxPrice = shop[dayField];
                maxPriceDay = dayField.substr(2);
            }
        }
        return maxPriceDay;
    },
    getMinPriceDay: function (shop) {
        var daysArray = ["p_mo", "p_tu", "p_we", "p_th", "p_fr", "p_sa", "p_su"];
        var minPrice = 0;
        var minPriceDay = undefined;
        for (var dayField in daysArray) {
            dayField = daysArray[dayField];
            if (minPrice == 0 || minPrice > shop[dayField]) {
                minPrice = shop[dayField];
                minPriceDay = dayField.substr(2);
            }
        }
        return minPriceDay;
    },
    getTabuDatesArray: function (filtersObj) {
        var tabuArray = [];
        if (typeof filtersObj.max_price != 'undefined' && typeof filtersObj.min_price != 'undefined') {
            for (var day in filtersObj.max_price) {
                day = filtersObj.max_price[day];
                if (filtersObj.min_price.indexOf(day) != -1) {
                    tabuArray.push(day);
                }
            }
        }
        return tabuArray;
    },
    getMinMaxPriceShops: function(filtersObj, shopsObj) {
        var shops = [];
        var tabuDatesArray = this.getTabuDatesArray(filtersObj);
        if (typeof filtersObj.max_price != 'undefined') {
            for (var shop in shopsObj) {
                shop = shopsObj[shop];
                var maxPriceDay = this.getMaxPriceDay(shop);
                if (filtersObj.max_price.indexOf(maxPriceDay) != -1 && tabuDatesArray.indexOf(maxPriceDay) == -1) {
                    shops.push(shop);
                }
            }
        }
        if (typeof filtersObj.min_price != 'undefined') {
            for (var shop in shopsObj) {
                shop = shopsObj[shop];
                var minPriceDay = this.getMinPriceDay(shop);
                if (filtersObj.min_price.indexOf(minPriceDay) != -1 && tabuDatesArray.indexOf(minPriceDay) == -1) {
                    shops.push(shop);
                }
            }
        }
        return shops;
    },

    getRatingShops: function(filtersObj, shopsObj) {
        var shops = [];
        var rating = filtersObj.rating;
        if (typeof rating != 'undefined') {
            for (var shop in shopsObj) {
                shop = shopsObj[shop];
                if (shop.rating != undefined) {
                    if (rating.indexOf(shop.rating.rating.toString()) >= 0) {
                        shops.push(shop);
                    }
                }
            }
        }
        return shops;
    },

    getAllFilters: function(err, results) {
        return {
            goods: function (callback) {
                Goods.find()
                    .sort('id DESC')
                    .exec(function (err, goods) {
                        var goodsObj = {
                            show: true,
                            items: {
                            }
                        }
                        for (var goodIndex in goods) {
                            goodsObj.items[goods[goodIndex].id] = {show: true, name: goods[goodIndex].name};
                        }
                        callback(err, goodsObj);
                    });
            },
            size: function (callback) {
                callback(err, {
                    show: true,
                    items: {
                        'b': {show: true},
                        'm': {show: true},
                        's': {show: true}
                    }
                });
            },
            dayPrice: function (callback) {
                GeneralInfo.find()
                    .sort('id DESC')
                    .limit(1)
                    .exec(function (err, info) {
                        var daysArray = ["mo", "tu", "we", "th", "fr", "sa", "su"]
                        var dayPrice = {};
                        for (var dayName in daysArray) {
                            dayName = daysArray[dayName];
                            if (typeof info[0] != 'undefined') {
                                dayPrice[dayName] = {min: info[0][dayName + "_min_price"], max: info[0][dayName + "_max_price"]};
                            }

                        }
                    callback(err, dayPrice);
                })
            },
            type: function (callback) {
                callback(err, {
                    show: true,
                    items: {
                        'sh': {show: true},
                        'st': {show: true},
                        'ss': {show: true}
                    }
                })
            },
            minPriceDays: function (callback) {
                callback(err, {
                    show: true,
                    items: {
                        'mo': {show: true},
                        'tu': {show: true},
                        'we': {show: true},
                        'th': {show: true},
                        'fr': {show: true},
                        'sa': {show: true},
                        'su': {show: true}
                    }
                });
            },
            price: function (callback) {
                GeneralInfo.find()
                    .sort('id DESC')
                    .limit(1)
                    .exec(function (err, info) {
                        callback(err, info[0]);
                    })
            },
            maxPriceDays: function (callback) {
                callback(err, {
                    show: true,
                    items: {
                        'mo': {show: true},
                        'tu': {show: true},
                        'we': {show: true},
                        'th': {show: true},
                        'fr': {show: true},
                        'sa': {show: true},
                        'su': {show: true}
                    }
                });
            },
            chainStores: function (callback) {
                ChainStores.find()
                    .sort('id DESC')
                    .exec(function (err, wides) {
                        var widesObj = {
                            show: true,
                            items: {}
                        }
                        for (var goodIndex in wides) {
                            widesObj.items[wides[goodIndex].id] = {show: true, name: wides[goodIndex].name};
                        }
                        callback(err, widesObj);
                    });
            },
            rating: function (callback) {
                callback(err, [5, 4, 3, 2, 1]);
            },
        }
    },

    getMaxPrice: function (resObj) {
        if (resObj != undefined) {
            var priceArray = ['p_mo', 'p_tu', 'p_we', 'p_th', 'p_fr', 'p_sa', 'p_su'];
            var maxPrice = 0;
            for (var dayIndex in priceArray) {
                var price = resObj[priceArray[dayIndex]];
                if (price > maxPrice) {
                    maxPrice = price;
                }
            }
            return maxPrice;
        }
    },

    getAllMaxPricesDays: function (shopObj, priceArray, maxPrice) {
        return priceArray.reduce(function (a, pDay, i) {
            if (shopObj[pDay] == maxPrice)
                a.push(pDay);
            return a;
        }, []);
    },

    //getMaxPriceDay: function(shopObj) {
    //    if (shopObj != undefined) {
    //        var priceArray = ['p_mo', 'p_tu', 'p_we', 'p_th', 'p_fr', 'p_sa', 'p_su'];
    //        var maxPrice = 0;
    //        for (var dayIndex in priceArray) {
    //            var price = shopObj[priceArray[dayIndex]];
    //            if (price > maxPrice) {
    //                maxPrice = price;
    //            }
    //        }
    //        //console.log('---------maxPrice---------',maxPrice)
    //        return this.getAllMaxPricesDays(shopObj, priceArray, maxPrice);
    //    }
    //},

    setSearchVisibility: function(searchText) {
        var searchObj = {items: searchText ? searchText : "", show: false};
        if (searchText) {
            searchObj.show = true;
        }
        return searchObj;
    },

    setFiltersVisibility: function (filtersObj, shopsObj) {
        var generalVisibility = [];
        for (var shopIndex in shopsObj) {
            var isLastShop = shopsObj.length -1 == shopIndex;
            var shop = shopsObj[shopIndex];
            for (var filterName in filtersObj) {
                switch (filterName) {
                    case 'goods':
                    {
                        if (shop.goods != null) {
                            var filtersItems = filtersObj[filterName].items;

                            for (var filterItemIndex in filtersItems) {
                                var alreadyShow = generalVisibility[filterName] != undefined
                                    && generalVisibility[filterName].indexOf(filterItemIndex) != -1;
                                // set visibility for filter item

                                if (!alreadyShow) {
                                    filtersItems[filterItemIndex].show = shop.goods.indexOf(filterItemIndex) != -1;
                                }
                                // create filter field name size
                                if (generalVisibility[filterName] == undefined) {
                                    generalVisibility[filterName] = [];
                                }
                                // set value to general visibility storage
                                if (shop.goods == filterItemIndex) {
                                    generalVisibility[filterName].push(filterItemIndex);
                                }
                                // set main filter visibility
                                if (isLastShop && generalVisibility[filterName] != undefined) {
                                    filtersObj[filterName].show = true;
                                }
                            }
                        }
                        break;
                    }
                    case 'size':
                    {
                        var filtersItems = filtersObj[filterName].items;
                        for (var filterItemIndex in filtersItems) {
                            var alreadyShow = generalVisibility[filterName] != undefined
                                && generalVisibility[filterName].indexOf(filterItemIndex) != -1;
                            // set visibility for filter item
                            if (!alreadyShow) {
                                filtersItems[filterItemIndex].show = shop.size == filterItemIndex
                            }
                            // create filter field name size
                            if (generalVisibility[filterName] == undefined) {
                                generalVisibility[filterName] = [];
                            }
                            // set value to general visibility storage
                            if (shop.size == filterItemIndex) {
                                generalVisibility[filterName].push(filterItemIndex);
                            }
                            // set main filter visibility
                            if (isLastShop && generalVisibility[filterName] != undefined) {
                                filtersObj[filterName].show = true;
                            }
                        }
                        break;
                    }
                    case 'dayPrice':
                    {

                        break;
                    }
                    case 'type':
                    {
                        var filtersItems = filtersObj[filterName].items;
                        for (var filterItemIndex in filtersItems) {

                            var alreadyShow = generalVisibility[filterName] != undefined
                                && generalVisibility[filterName].indexOf(filterItemIndex) != -1;
                            // set visibility for filter item
                            if (!alreadyShow) {
                                filtersItems[filterItemIndex].show = shop.type == filterItemIndex
                            }
                            // create filter field name size
                            if (generalVisibility[filterName] == undefined) {
                                generalVisibility[filterName] = [];
                            }
                            // set value to general visibility storage
                            if (shop.type == filterItemIndex) {
                                generalVisibility[filterName].push(filterItemIndex);
                            }
                            // set main filter visibility
                            if (isLastShop && generalVisibility[filterName] != undefined) {
                                filtersObj[filterName].show = true;
                            }
                        }
                        break;
                    }
                    case 'minPriceDays':
                    {

                        break;
                    }
                    case 'price':
                    {

                        break;
                    }
                    case 'maxPriceDays':
                    {
                        //var filtersItems = filtersObj[filterName].items;
                        //for (var filterItemIndex in filtersItems) {
                        //    var alreadyShow = generalVisibility[filterName] != undefined
                        //        && generalVisibility[filterName].indexOf(filterItemIndex) != -1;
                        //    // set visibility for filter item
                        //
                        //    if (!alreadyShow) {
                        //        filtersItems[filterItemIndex].show = this.getMaxPriceDay(shop).indexOf('p_' + filterItemIndex) != -1
                        //    }
                        //    // create filter field name size
                        //    if (generalVisibility[filterName] == undefined) {
                        //        generalVisibility[filterName] = [];
                        //    }
                        //    // set value to general visibility storage
                        //    if (shop.size == filterItemIndex) {
                        //        generalVisibility[filterName].push(filterItemIndex);
                        //    }
                        //    // set main filter visibility
                        //    if (isLastShop && generalVisibility[filterName] != undefined) {
                        //        filtersObj[filterName].show = true;
                        //    }
                        //}
                        break;
                    }
                    case 'chainStores':
                    {
                        var filtersItems = filtersObj[filterName].items;
                        for (var filterItemIndex in filtersItems) {
                            var alreadyShow = generalVisibility[filterName] != undefined
                                && generalVisibility[filterName].indexOf(filterItemIndex) != -1;
                            // set visibility for filter item

                            if (!alreadyShow) {
                                filtersItems[filterItemIndex].show = shop.wide == filterItemIndex
                            }
                            // create filter field name size
                            if (generalVisibility[filterName] == undefined) {
                                generalVisibility[filterName] = [];
                            }
                            // set value to general visibility storage
                            if (shop.wide == filterItemIndex) {
                                generalVisibility[filterName].push(filterItemIndex);
                            }
                            // set main filter visibility
                            if (isLastShop && Object.keys(generalVisibility[filterName]).length == 0) {
                                filtersObj[filterName].show = false;
                            }
                        }
                        break;
                    }
                    case 'rating':
                    {

                        //for (var goodIndex in goods) {
                        //    goodsObj.items[goods[goodIndex].id] = {show: true, name: goods[goodIndex].name};
                        //}
                        //console.log(5555555555555555555555555555555555555, filtersObj[filterName], shop.rating)
                        //var filtersItems = filtersObj[filterName];
                        //for (var filterItemIndex in filtersItems) {
                        //    if (shop.rating == undefined) continue;
                        //
                        //    var alreadyShow = generalVisibility[filterName] != undefined
                        //        && generalVisibility[filterName].indexOf(filterItemIndex) != -1;
                        //    // set visibility for filter item
                        //    if (!alreadyShow) {
                        //        filtersItems[filterItemIndex].show = shop.rating.rating == filterItemIndex
                        //    }
                        //    // create filter field name size
                        //    if (generalVisibility[filterName] == undefined) {
                        //        generalVisibility[filterName] = [];
                        //    }
                        //    // set value to general visibility storage
                        //    if (shop.rating.rating == filterItemIndex) {
                        //        generalVisibility[filterName].push(filterItemIndex);
                        //    }
                        //    // set main filter visibility
                        //    if (isLastShop && generalVisibility[filterName] != undefined) {
                        //        filtersObj[filterName].show = true;
                        //    }
                        //}
                        break;
                    }
                }
            }
        }
        return filtersObj;
    }
};