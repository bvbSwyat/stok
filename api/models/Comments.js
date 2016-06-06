/**
* Chain Comments.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    attributes: {
        shop: {
            model: 'shop'
        },
        email: {
            type: 'string'
        },
        rating: {
            type: 'integer'
        },
        comment: {
            type: 'string'
        },
        accept: {
           type: 'boolean'
        }
    }
};

