/**
 * Created by swyat on 17.07.15.
 */

/**
 *  @factory restService - functional that works with RESTful API of the server.
 *
 *  @param $resource - angular base service for rest requests
 *  @param $location - angular base service for getting/setting location
 *  @return object - custom resource
 */
NgApp.factory("RestService", function ($resource, $location) {
    var resource = $resource(":action/:operation/:operation1/:operation2/:operation3/",
        {
            action: "@api",
            operation: '@operation',
            operation1: "",
            operation2: "",
            operation3: ""
        },
        {
            get_chain_stores: {
                method: "GET",
                isArray: true,
                cache: true,
                url: $location.protocol() + '://'
                    + location.host
                    + "/api/chain_stores"
            },
            get_comments: {
                method: "GET",
                isArray: true
            },

            create_comment: {
                method: "POST",
                isArray: false,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        }
    );

    resource.getChainStores = function () {
        return this.get_chain_stores().$promise;
    },

    resource.getComments = function (shopId) {
        return this.get_comments({
            operation: 'api',
            operation1: 'shop',
            operation2: shopId,
            operation3: "comments"
        }).$promise;
    },

    resource.createComment = function (shopId, email, rating, comment) {
        return this.create_comment(
            {
                operation: 'api',
                operation1: 'shop',
                operation2: shopId,
                operation3: "comments"
            }, $.param({
                email: email,
                rating: rating,
                comment: comment
            })).$promise;
    };

    return resource;
});
