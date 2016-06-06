/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': {
  //   view: 'homepage'
  // },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

   '/': {
    controller: 'ShopsController',
    action: 'index'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

    /***************************************************************************
     *                                                                          *
     * routes for the list of shops (filtering + pagination)                    *
     *                                                                          *
     ***************************************************************************/
    '/filter/:filters': {
        controller: 'ShopsController',
        action: 'index'
    },
    '/page/:page': {
        controller: 'ShopsController',
        action: 'index'
    },

    '/page/:page/filter/:filters': {
        controller: 'ShopsController',
        action: 'index'
    },

    '/shop/:id': {
        controller: 'shop',
        action: 'index'
    },

    /***************************************************************************
     *                                                                          *
     * offers routs                                                             *
     *                                                                          *
     ***************************************************************************/
    '/offers/clients': {
        controller: 'offers',
        action: 'clients'
    },

    '/offers/owners': {
        controller: 'offers',
        action: 'owners'
    },

    /***************************************************************************
     *                                                                          *
     * contacts routs                                                             *
     *                                                                          *
     ***************************************************************************/
    '/contacts': {
        controller: 'contacts',
        action: 'index'
    },


    /***************************************************************************
     *                                                                          *
     * auth API                                                                 *
     *                                                                          *
     ***************************************************************************/
    'post /api/login': {
        controller: 'auth',
        action: 'index'
    },


    /***************************************************************************
     *                                                                          *
     * REST API routes for data. Admin routes for managing shops                *
     *                                                                          *
     ***************************************************************************/
    'delete /api/shop/list/:id': {
        controller: 'shop',
        action: 'remove'
    },

    'put /api/shop/list/:id': {
        controller: 'shop',
        action: 'update'
    },

    'get /api/shop/list/:id': {
        controller: 'shop',
        action: 'watch'
    },

    'get /api/shop/list': {
        controller: 'shop',
        action: 'list'
    },

    'post /api/shop/list': {
        controller: 'shop',
        action: 'create'
    },

    'post /api/shop/update': {
        controller: 'shop',
        action: 'update'
    },


    /***************************************************************************
     *                                                                          *
     * Admin routes for managing images and other media files                   *
     *                                                                          *
     ***************************************************************************/
    'get /api/media/shop_images': {
        controller: 'shopMedia',
        action: 'list'
    },

    'post /api/shop_images/edit/:id': {
        controller: 'shopMedia',
        action: 'upload'
    },

    'get /api/media/shop_images/:id': {
        controller: 'shopMedia',
        action: 'getEntity'
    },

    'delete /api/media/shop_images/:id': {
        controller: 'shopMedia',
        action: 'removeItem'
    },

    'delete /api/shop_images/:id/:img': {
        controller: 'shopMedia',
        action: 'remove'
    },

    /***************************************************************************
     *                                                                          *
     * Admin routes for managing comments                                       *
     *                                                                          *
     ***************************************************************************/
    'get /api/comments': {
        controller: 'comments',
        action: 'list'
    },

    'get /api/comments/:id': {
        controller: 'comments',
        action: 'watch'
    },

    'put /api/comments/:id': {
        controller: 'comments',
        action: 'update'
    },

    'delete /api/comments/:id': {
        controller: 'comments',
        action: 'remove'
    },

    'get /api/shop/:id/comments': {
        controller: 'comments',
        action: 'list'
    },

    'post /api/shop/:id/comments': {
        controller: 'comments',
        action: 'create'
    },

    'post /api/comments': {
        controller: 'comments',
        action: 'create'
    },


    /***************************************************************************
     *                                                                          *
     * Admin routes for managing chain stores                                   *
     *                                                                          *
     ***************************************************************************/
    'get /api/chain_stores': {
        controller: 'chainStores',
        action: 'list'
    },
    'get /api/chain_stores/:id': {
        controller: 'chainStores',
            action: 'watch'
    },
    'post /api/chain_stores': {
        controller: 'chainStores',
        action: 'create'
    },
    'put /api/chain_stores/:id': {
        controller: 'chainStores',
        action: 'update'
    },
    'delete /api/chain_stores/:id': {
        controller: 'chainStores',
        action: 'remove'
    },


    /***************************************************************************
     *                                                                          *
     * Admin routes for managing chain stores                                   *
     *                                                                          *
     ***************************************************************************/
    'get /api/goods': {
        controller: 'goods',
        action: 'list'
    },
    'get /api/goods/:id': {
        controller: 'goods',
        action: 'watch'
    },
    'post /api/goods': {
        controller: 'goods',
        action: 'create'
    },
    'put /api/goods/:id': {
        controller: 'goods',
        action: 'update'
    },
    'delete /api/goods/:id': {
        controller: 'goods',
        action: 'remove'
    },

    /***************************************************************************
     *                                                                          *
     * Admin routes for managing SEO data                                       *
     *                                                                          *
     ***************************************************************************/
    'get /api/seo': {
        controller: 'seo',
        action: 'list'
    },
    'get /api/seo/:id': {
        controller: 'seo',
        action: 'watch'
    },
    'post /api/seo': {
        controller: 'seo',
        action: 'create'
    },
    'put /api/seo/:id': {
        controller: 'seo',
        action: 'update'
    },
    'delete /api/seo/:id': {
        controller: 'seo',
        action: 'remove'
    }


};
