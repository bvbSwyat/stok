/**
 * Created by swyat on 08.06.15.
 */

NgApp.controller('MainController', function ($scope, $rootScope, $modal, $log, $window) {

    // var modalInstance;
    //
    // $scope.initCtrl = function() {
    //     $scope.rating1 = 3;
    //     $scope.rating_f1 = 1;
    //     $scope.rating_f2 = 2;
    //     $scope.rating_f3 = 3;
    //     $scope.rating_f4 = 4;
    //     $scope.rating_f5 = 5;
    // }
    //
    // $rootScope.price = {genPrice: [],
    //                     daysPrice: {
    //                         mo: [],
    //                         tu: [],
    //                         we: [],
    //                         th: [],
    //                         fr: [],
    //                         sa: [],
    //                         su: []}
    //                     }
    // /**
    //  * @function openPopup - for opening info popup
    //  */
    // $rootScope.openPopup = function (popupObj) {
    //     try {
    //         return modalInstance = $modal.open(popupObj);
    //     }
    //     catch (e) {
    //         $log.error('Bad object for popup', e);
    //     }
    // }
    //
    // /**
    //  * @function closePopup - for closing info popup
    //  */
    // $rootScope.closePopup = function () {
    //     modalInstance.close();
    // }
    //
    // /**
    //  * @function $rootScope.getObj - finding and returning object py property and value
    //  *
    //  * @param myObjects - array for searching in
    //  * @param prop - object property for searching
    //  * @param value - object value for searching
    //  * @returns {number} count - count of matches
    //  */
    // $rootScope.getObj = function (myObjects, prop, value) {
    //     var obj = $.grep(myObjects, function (val) {
    //         return val[prop] == value;
    //     });
    //     return obj[0];
    // };
    //
    // $scope.getBool = function (str) {
    //     return angular.isDefined(str)
    //         ? angular.fromJson(str)
    //         : console.error('getBool not working');
    // };
    //
    // $scope.fromJson = function (str) {
    //     return angular.isDefined(str)
    //         ? angular.fromJson(str)
    //         : console.error('fromJson not working');
    // };
    //
    // $scope.changeInUrl = function(paramName, paramValue) {
    //     var path = $window.location.pathname;
    //     var entry = path.indexOf(paramName+ '/');
    //     var addNewParam = entry == -1;
    //     var pathWithValue = path.substr(addNewParam ? 0 : entry + (paramName+ '/').length);
    //
    //     var lastSlashIndexAfterValue = pathWithValue.indexOf('/');
    //     var hasPostPath = lastSlashIndexAfterValue > -1;
    //
    //     var prePath = path.substr(0, entry);
    //     var postPath = hasPostPath ? pathWithValue.substr(lastSlashIndexAfterValue): '/';
    //
    //     if (paramValue == null)
    //         return (prePath == '/'? '': prePath) + postPath;
    //
    //
    //     return (prePath == '/'? prePath: '') +paramName+ '/' + paramValue + postPath;
    // };
});
