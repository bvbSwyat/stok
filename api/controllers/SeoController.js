/**
 * SeoController
 *
 * @description :: Server-side logic for managing seo data
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    list: function (req, res) {
        Seo.find()
            .sort('id DESC')
            .exec(function (err, metas) {
                if (err) return res.send(500);
                return res.json(metas);
            });
    },

    watch: function (req, res) {
        var Id = req.param('id');
        Seo.findOne(Id).exec(function (err, metas) {
            if (!metas) return res.send(404);
            if (err) return res.send(500);
            return res.json(metas);
        });
    },

    create: function (req, res) {
        var params = {
            page: req.param('page'),
            title: req.param('title'),
            description: req.param('description')
        }
        Seo.create(params).exec(function (err, metas) {
            if (err) return res.send(500);
            return res.json(metas);
        });
    },

    update: function (req, res) {
        var id = req.param('id');
        var elem = {
            page: req.param('page'),
            title: req.param('title'),
            description: req.param('description')
        };
        Seo.update(id, elem).exec(function (err) {
            if (err) return res.send(500);
        });
    },

    remove: function (req, res) {
        var id = req.param('id');
        Seo.destroy(id).exec(function (err) {
            if (err) return res.send(500);
            res.redirect('/');
        });
    }
};

