/**
 * OffersController
 *
 * @description :: Server-side logic for managing offers to clients and owners
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function(req, res) {
        res.seo('contacts/index', 'contacts');
    }
};

