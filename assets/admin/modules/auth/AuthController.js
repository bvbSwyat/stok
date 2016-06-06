/**
 * Created by swyat on 21.04.15.
 */
angular.module('authProvider')
    .controller('AuthController', function ($scope, $rootScope, localStorageService, RestService,
                                            $state, notification, $window, $location) {

        $rootScope.$on('$stateChangeSuccess', function (event, state, params, fromState, fromParams) {
            $rootScope.$state = $state;
        });

        /**
         * @function $scope.initCtrl - changed state depended on current state, working when controller is initialising
         */
        $scope.initCtrl = function() {
            switch($state.current.name) {
                case "login":
                    var token = localStorageService.get('token');
                    if (angular.isDefined(token) && token != null && token.length > 0)
                        $location.path('/')
                    break;
                case "logout":
                    localStorageService.clearAll();
                    $state.go('login');
                    break;
            }
        }();

        /**
         * @function $scope.loginUser - user login function
         */
        $scope.loginUser = function() {
            RestService.loginUser($scope.loginFormData).then(function(response) {
                localStorageService.set('token', 123);
                notification.log('Login successful', {addnCls: 'humane-flatty-success'});
                $location.path('/dashboard')
            });
        }
    });
