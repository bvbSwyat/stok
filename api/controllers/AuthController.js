/**
 * AuthController
 *
 * @description :: Server-side logic for authorization
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function (req, res) {
        var originName = 'swyat';
        var originPass = '15011992';

        var name = req.param('name');
        var password = req.param('password');

        if (originName != name || originPass != password) return res.send(401, {error: "User name or password is not correct!"});
        return res.send(200);
    }
};

