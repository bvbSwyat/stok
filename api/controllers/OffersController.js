/**
 * OffersController
 *
 * @description :: Server-side logic for managing offers to clients and owners
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function() {

    },
    clients: function (req, res) {
        res.seo('offers/clients', 'clientOffers');
    },
    owners: function (req, res) {
        res.seo('offers/owners', 'ownerOffers');
    }
};

