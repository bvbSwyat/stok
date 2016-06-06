/**
 * ShopMediaController
 *
 * @description :: Server-side logic for managing shop images
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var http = require('http');
var fs = require('fs');
var url = require("url");
var formidable = require('formidable');

module.exports = {

    getEntity: function (req, res) {
        var id = req.param('id');
        ShopMedia.findOne(id).exec(function (err, post) {
            if (!post) return res.send(404);
            if (err) return res.send(500);
            return res.json(post);
        });
    },

    list: function (req, res) {
        ShopMedia.find()
            .sort('id DESC')
            .exec(function (err, posts) {
                if (err) return res.send(500);
                return res.json(posts);
            });
    },

    upload: function (req, res) {
        var id = req.param('id');
        var fileToDownload = req.param('img');
        var format = fileToDownload.slice(fileToDownload.lastIndexOf("."))
        var imageName = TransitionalService.randString(16) + format
        var file = fs.createWriteStream("assets/upload/shops/" + imageName);
        var request = http.get(fileToDownload, function (response) {
            response.pipe(file);
        });
        if (req.param('type') == 'logo') {
            ShopMedia.update(id, {logo: imageName}).exec(function (err) {
                if (err) return res.send(500);
            });
        } else {
            ShopMedia.findOne(id).exec(function (err, result) {
                var imagesList = result.images == "" ? [] : result.images;
                    imagesList.push(imageName);
                ShopMedia.update(id, {images: imagesList}).exec(function (err) {
                    if (err) return res.send(500);
                })
            })
        }
    },
    remove: function (req, res) {
        var id = req.param('id');
        var image = req.param('img');

        ShopMedia.findOne(id).exec(function (err, entity) {
            if (image != 'logo') {
                if (!entity) return res.send(404);
                if (err) return res.send(500);
                var images = [];
                entity.images.forEach(function (item, index) {
                    if (index != image) {
                        images.push(item);
                    } else {
                        fs.unlinkSync("assets/upload/shops/" + item);
                    }
                })
                ShopMedia.update(id, {images: images}).exec(function (err, data) {
                    if (err) return res.send(500);
                    return res.send(200);
                })
            } else {
                ShopMedia.update(id, {logo: ""}).exec(function (err) {
                    if (err) return res.send(500);
                    fs.unlinkSync("assets/upload/shops/" + entity.logo);
                    return res.send(200);
                })
            }
        })
    },
    removeItem: function(req, res) {
        var id = req.param('id');
        ShopMedia.destroy(id).exec(function (err, responce) {
            if (err) return res.send(500);
            return res.send(200);
        });
    }
};

