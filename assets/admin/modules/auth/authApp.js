/**
 * Created by swyat on 21.04.15.
 */

angular.module('authProvider', ['LocalStorageModule', 'ngResource', 'AppConfig'])

.run(function ($rootScope, $state, $stateParams, localStorageService, $log, $location, Restangular, notification) {


    /**
     * @function Restangular.setErrorInterceptor - catch requests which completed with 401 error (not logined)
     */
    Restangular.setErrorInterceptor(function (response, deferred, responseHandler) {
        //response.status === 401  unauthorized
        if (response.status == 401 && $state.current.name == 'login') {
            var error = "";
            try {
                error = response.data ? response.data.error : 'unknown error';
            }
            finally {
                notification.log('Login is not successful ' + error, {addnCls: 'humane-flatty-error'});
            }
            return;
        }
        if (localStorageService.get('token') == null) {
            $state.go('/login');
            return;
        }
    })
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: '/login',
        controller: 'AuthController',
        templateUrl: 'modules/auth/loginTmpl.html'
    })
    $stateProvider.state('logout', {
        url: '/logout',
        controller: 'AuthController'
    })
});
