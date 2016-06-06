/**
 * Created by swyat on 15.09.15.
 */

function PopupController ($scope, $rootScope, $modalInstance, popupData) {

    $scope.location = popupData.location;
    $scope.iconObj = popupData.iconObj;

    /**
     * $scope.closePopup - function for closing popup window
     * @param param {Object} - popup object
     */
    $scope.closePopup = function (param) {
        $modalInstance.close(param);
    }

}