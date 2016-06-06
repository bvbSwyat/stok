/**
 * ShopController
 *
 * @description :: Server-side logic for managing shops
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function (req, res) {
        var id = req.param('id');
        Shop
            .findOne(id)
            .populate('media')
            .populate('rating')
            .exec(function (err, shop) {
                if (!shop) return res.send(404);
                if (err) return res.send(500);
                Goods.find(TransitionalService.getGoodsIdsList(shop.goods)).exec(function (err, list) {
                    shop.goods = list.length == 0 ? null : list;
                    res.seo({
                        shop: shop
                    }, 'shop');
                });

            });
    },

    page: function (req, res) {
        var page = req.param('page');

        Shop.find()
            .sort('id DESC')
            .paginate({
                page: page,
                limit: 2
            })
            .exec(function (err, posts) {
                if (err) return res.send(500);
                res.seo({
                    posts: posts
                }, 'shop');

            });
    },

    create: function (req, res) {
        var params = {
            name: req.param('name'),
            color: req.param('color'),
            type: req.param('type'),
            address: req.param('address'),
            size: req.param('size'),
            email: req.param('email'),
            telephone: req.param('telephone'),
            site: req.param('site'),
            title: req.param('title'),
            description: req.param('description'),
            p_mo: req.param('p_mo'),
            p_tu: req.param('p_tu'),
            p_we: req.param('p_we'),
            p_th: req.param('p_th'),
            p_fr: req.param('p_fr'),
            p_su: req.param('p_su'),
            p_sa: req.param('p_sa')
        }

        Shop.create(params).exec(function (err, post) {
            TransitionalService.createEntity(post.id);
            if (!err) TransitionalService.setPrice(post);
            return res.json(post);
        });


    },

    update: function (req, res) {
        var id = req.param('id');

        var elem = {
            name: req.param('name'),
            color: req.param('color'),
            type: req.param('type'),
            address: req.param('address'),
            size: req.param('size'),
            email: req.param('email'),
            telephone: req.param('telephone'),
            site: req.param('site'),
            title: req.param('title'),
            description: req.param('description'),
            wide: req.param('wide'),
            goods: req.param('goods'),
            p_mo: req.param('p_mo'),
            p_tu: req.param('p_tu'),
            p_we: req.param('p_we'),
            p_th: req.param('p_th'),
            p_fr: req.param('p_fr'),
            p_su: req.param('p_su'),
            p_sa: req.param('p_sa')

        };
        TransitionalService.getLocation(req.param('address'), function(location) {
            elem.location = location != undefined ? location : null;
            Shop.update(id, elem).exec(function (err, responce) {
                if (err) return res.send(500);
                if (!err) TransitionalService.setPrice(responce[0]);
                return res.redirect('/');
            });
        });

    },

    remove: function (req, res) {
        var id = req.param('id');
        Shop.destroy(id).exec(function (err, responce) {
            if (err) return res.send(500);
            if (!err) TransitionalService.setPrice(responce[0]);
            return res.send(200);
        });
    },
    list: function (req, res) {
        Shop.find()
            .sort('id DESC')
            .exec(function (err, posts) {
                if (err) return res.send(500);
                return res.json(posts);
            });
    },

    watch: function (req, res) {
        var id = req.param('id');
        Shop.findOne(id).exec(function (err, post) {
            if (!post) return res.send(404);
            if (err) return res.send(500);
            return res.json(post);
        });
    }
};

