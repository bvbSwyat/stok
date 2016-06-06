/**
 * CommentsController
 *
 * @description :: Server-side logic for managing shops
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    list: function (req, res) {
        var id = req.param('id') || (req.param('_filters') != undefined ? JSON.parse(req.param('_filters')).id : undefined);
        var whereObj = {};
        if(id != undefined) {
            whereObj = {shop: id};
            //for shop view
            if (req.param('id') != undefined) {
                whereObj.accept = true;
            }
        }
        Comments.find(whereObj)
            .sort('id DESC')
            .exec(function (err, comment) {
                if (err) return res.send(500);
                return res.json(comment);
            });
    },

    create: function (req, res) {
        var params = {
            shop: req.param('id') || req.param('shop'),
            email: req.param('email'),
            rating: req.param('rating'),
            comment: req.param('comment'),
            accept: false
        };
        Comments.create(params).exec(function (err, comment) {
            if (err) return res.send(500);
            return res.json(comment);
        });
    },

    update: function (req, res) {
        var id = req.param('id');
        var params = {
            shop: req.param('shop'),
            email: req.param('email'),
            rating: req.param('rating'),
            comment: req.param('comment'),
            accept: req.param('accept')
        };
        Comments.update(id, params).exec(function (err, comment) {
            TransitionalService.countShopRating(params.shop);
            if (err) return res.send(500);
            return res.json(comment);
        });
    },

    watch: function (req, res) {
        Comments.findOne(req.param('id')).exec(function (err, comment) {
            if (err) return res.send(500);
            return res.json(comment);
        });
    },

    remove: function (req, res) {
        var id = req.param('id');
        Comments.destroy(id).exec(function (err, data) {
            if (data.accept == true) {
                TransitionalService.countShopRating(data.shop);
            }
            if (err) return res.send(500);
            res.redirect('/');
        });
    }
};

