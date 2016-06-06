/**
 * Created by swyat on 17.05.15.
 */

AdminApp.controller('adminController', function ($scope, $rootScope, localStorageService, $location, $state) {

    /**
     * @handler $stateChangeSuccess - event handler for changing state
     */
    $rootScope.$on('$stateChangeSuccess', function (event, state, params, fromState, fromParams) {
        $rootScope.$state = $state;

        //if token is bad, go to login page
        var token = localStorageService.get('token');
        if (token == null || token.length == 0)
            $location.path('/login');
    });

});
