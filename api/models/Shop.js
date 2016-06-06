/**
* Shop.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        name: {
            type: 'string'
        },
        color: {
            type: 'string'
        },
        adress: {
            type: 'string'
        },
        location: {
            type: 'string'
        },
        telephone: {
            type: 'string'
        },
        site: {
            type: 'string'
        },
        logo: {
            type: 'string'
        },
        size: {
            type: 'string'
        },
        rating: {
            model: 'rating'
        },
        media: {
            model: 'shopMedia'
        },
        wide: {
            model: 'chainStores'
        },
        p_mo: {
            type: 'integer'
        },
        p_tu: {
            type: 'integer'
        },
        p_we: {
            type: 'integer'
        },
        p_th: {
            type: 'integer'
        },
        p_fr: {
            type: 'integer'
        },
        p_sa: {
            type: 'integer'
        },
        p_su: {
            type: 'integer'
        },
        title: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
    }
};

/*
 ,
 maxLength: 120,
 required: true
 */

