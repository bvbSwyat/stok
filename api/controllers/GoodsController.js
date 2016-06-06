/**
 * GoodsController
 *
 * @description :: Server-side logic for managing shops
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    list: function (req, res) {
        Goods.find()
            .sort('id DESC')
            .exec(function (err, wides) {
                if (err) return res.send(500);
                return res.json(wides);
            });
    },

    watch: function (req, res) {
        var Id = req.param('id');
        Goods.findOne(Id).exec(function (err, wide) {
            if (!wide) return res.send(404);
            if (err) return res.send(500);
            return res.json(wide);
        });
    },

    create: function (req, res) {
        var params = {
            name: req.param('name')
        }
        Goods.create(params).exec(function (err, wide) {
            if (err) return res.send(500);
            return res.json(wide);
        });


    },

    update: function (req, res) {
        var id = req.param('id');
        var elem = {
            name: req.param('name')
        };
        Goods.update(id, elem).exec(function (err) {
            if (err) return res.send(500);
            res.redirect('/');
        });
    },

    remove: function (req, res) {
        var id = req.param('id');
        Goods.destroy(id).exec(function (err) {
            if (err) return res.send(500);
            res.redirect('/');
        });
    }
};

