/**
* Shop.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        shop: {
            model: 'shop'
        },
        logo: {
            type: 'string'
        },
        images: {
            type: 'json'
        }
    }
};

/*
 ,
 maxLength: 120,
 required: true
 */

