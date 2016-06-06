/**
 * ShopController
 *
 * @description :: Server-side logic for managing shops
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    create: function (req, res) {
        var params = {
            name: req.param('name'),
            type: req.param('type'),
            address: req.param('address'),
            size: req.param('size'),
            email: req.param('email'),
            telephone: req.param('telephone'),
            site: req.param('site'),
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
            return res.json(post);
        });


    },

    update: function (req, res) {
        var id = req.param('id');

        var elem = {
            name: req.param('name'),
            type: req.param('type'),
            address: req.param('address'),
            size: req.param('size'),
            email: req.param('email'),
            telephone: req.param('telephone'),
            site: req.param('site'),
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

        Shop.update(id, elem).exec(function (err) {
            if (err) return res.send(500);
            return res.redirect('/');
        });
    },

    remove: function (req, res) {
        var id = req.param('id');
        Shop.destroy(id).exec(function (err) {
            if (err) return res.send(500);
            res.redirect('/');
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
        var Id = req.param('id');
        Shop.findOne(Id).exec(function (err, post) {
            if (!post) return res.send(404);
            if (err) return res.send(500);
            return res.json(post);
        });
    }
};

