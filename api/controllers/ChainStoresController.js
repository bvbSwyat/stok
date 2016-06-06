/**
 * ChainStoresController
 *
 * @description :: Server-side logic for managing shops
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    list: function (req, res) {
        ChainStores.find()
            .sort('id DESC')
            .exec(function (err, wides) {
                if (err) return res.send(500);
                return res.json(wides);
            });
    },

    watch: function (req, res) {
        var Id = req.param('id');
        ChainStores.findOne(Id).exec(function (err, wide) {
            if (!wide) return res.send(404);
            if (err) return res.send(500);
            return res.json(wide);
        });
    },

    create: function (req, res) {
        var params = {
            name: req.param('name')
        }
        ChainStores.create(params).exec(function (err, wide) {
            if (err) return res.send(500);
            return res.json(wide);
        });


    },

    update: function (req, res) {
        var id = req.param('id');
        var elem = {
            name: req.param('name')
        };
        ChainStores.update(id, elem).exec(function (err) {
            if (err) return res.send(500);
        });
    },

    remove: function (req, res) {
        var id = req.param('id');
        ChainStores.destroy(id).exec(function (err) {
            if (err) return res.send(500);
            res.redirect('/');
        });
    }
};

