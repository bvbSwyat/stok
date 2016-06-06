/**
 * 200 (OK) Response
 *
 * Usage:
 * return res.ok();
 * return res.ok(data);
 * return res.ok(data, 'auth/login');
 *
 * @param  {Object} data
 * @param  {String|Object} options
 *          - pass string to render specified view
 */

module.exports = function sendSEO(data, options) {
    // Get access to `req`, `res`, & `sails`
    var req = this.req;
    var res = this.res;
    var sails = req._sails;
    var prevDataStr = typeof data === 'string';
    var seoType = options;
    options = (typeof data === 'string') ? {view: data} : data || {};
    data.seo = {};

    if (seoType) {
        res.status(200);

        if (req.wantsJSON) {
            return res.jsonx(data);
        }
        Seo.findOne({page: seoType}).exec(function (err, seo) {
            if (!seo) return res.view(data);
            if (err) return res.send(500);

            //otherwise shop has its own seo field
            if (seoType != 'shop') {
                if (prevDataStr) {
                    data = {};
                }
                data.seo = seo;
            } else {
                if (data.shop != undefined) {
                    data.seo = {title: data.shop.title, description: data.shop.description}
                }
            }
            if (options.view) {
                return res.view(options.view, data);
            } else {
                return res.view(data);
            }
        });
    }
};
