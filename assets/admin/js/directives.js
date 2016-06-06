/**
 * Created by swyat on 4/14/16.
 */
AdminApp.directive('colorSelect', function (AppConfig, $http, $q, $compile, $state) {
    return {
        restrict: 'E',
        scope: {
            'entry': '=?'
        },
        link: function ($scope, $element, $attrs) {
            var defaultColor = '#dadada';

            $scope.$watch('color', function() {
                $scope.entry.values.color = $scope.color;
                $element.find('button').css('background', $scope.color);
            });

            $scope.color = angular.isDefined($scope.entry.values.color) && $scope.entry.values.color != null
                ? $scope.entry.values.color
                : defaultColor;

            var colorTemplate =
                '<p class="input-group">' +
                '<input class="form-control" ' +
                'colorpicker ' +
                'colorpicker-size="150" ' +
                'ng-model="color" ' +
                'type="text">' +
                '<span class="input-group-btn"> ' +
                '<button type="button" class="btn btn-default" >' +
                '<i class="glyphicon glyphicon-tint"></i></button> ' +
                '</span>' +
                '</p>';

            $element.append(colorTemplate);
            $compile($element.contents())($scope);
        }
    }
});


AdminApp.directive('imagesList', function ($compile) {
    return {
        restrict: 'E',
        scope: {entry: '&'},
        link: function (scope, element, attrs) {
            var imagesList = scope.entry().values.images;
            var imagesTemplate = "";
            angular.forEach(imagesList, function (image, index) {
                imagesTemplate += '<div class="img_box" img-manager>' +
                    '<div class= "delete_img" ng-click = "removeImg(entry().values.id, '+ index +')"> х </div>' +
                    '<img class="shop_images" src="/upload/shops/'+ image + '"/>' +
                    '</div>';
            })

            if (imagesTemplate == "")
                imagesTemplate = '<img class="shop_images" src="/admin/img/no_photo.gif"/>';

            element.append(imagesTemplate);
            $compile(element.contents())(scope);
        }
    };
});

AdminApp.directive('logoImage', function ($compile) {
    return {
        restrict: 'E',
        scope: {entry: '&'},
        link: function (scope, element, attrs) {
            var logo = scope.entry().values.logo;
            var shopId = scope.entry().values.id;

            var logoTemplate = angular.isDefined(logo) && logo != ""
                ? '<div class="img_box" img-manager>' +
                    '<div class= "delete_img" ng-click = "removeImg(\''+ shopId +'\')"> х </div>' +
                    '<img class="shop_logo" src="/upload/shops/'+ logo +'"/>' +
                '</div>'
                : '<div class="img_box" img-manager>'+
                    '<img class="shop_images" src="/admin/img/no_photo.gif"/>'
                +'</div>';

            element.append(logoTemplate);
            $compile(element.contents())(scope);
        }
    };
});

AdminApp.directive('imagesTemplate', function ($compile) {
    return {
        restrict: 'E',
        scope: {entry: '&'},
        templateUrl: "views/imagesView.html",
        link: function (scope, element, attrs) {
        }
    };
});


AdminApp.directive('ngChooseFile', function ($window, $rootScope, $timeout, RestService, $location) {
    'use strict';
    var helper = {
        support: !!($window.FileReader)
    };
    return {
        scope: {
            entry: '='
        },
        restrict: 'A',
        link: function ($scope, element, attrs) {
            if (!helper.support) {
                return;
            }
            var fileInput = element.find(':file');
            $scope.featherEditor = new Aviary.Feather({
                apiKey: 'a684f6d-90d2-4ad8-a173-87df2924932e',
                tools: 'all',
                onSave: function (imageId, newURL) {
                    var imgType = imageId;
                    $scope.featherEditor.close();
                    if(imageId != 'logo') {
                        imgType = 'list';
                    }
                    RestService.createShopImage($location.path().substring(1), {img: newURL, type: imageId != 'logo' ? 'list' : 'logo'});
                    var img = document.getElementById(imageId);
                    img.src = newURL;
                }
            });

            $rootScope.openEditImgPopup = function (imgObj, imgId) {
                $scope.featherEditor.launch({
                    image: imgId,
                    url: imgObj
                });
            }

            $scope.imgCreator = function(imgObj, imgSrc) {
                var imgType = attrs.ngChooseFile;
                var imgLength = element.find('.img_wrapper img').length;
                switch (imgType) {
                    case "logo": {
                        if (imgLength == 1) {
                            element.find('.img_wrapper img').attr("src", imgSrc);
                            return "logo";
                        }
                        else {
                            imgObj.id = "logo";
                        }
                        break;
                    }
                    case "list": {
                        imgObj.id = "list_item" + (imgLength + 1);
                        break;
                    }
                }
                imgObj.src = imgSrc;
                element.find('.img_wrapper').append(imgObj);
                return imgObj.id;
            }

            fileInput.change(function () {
                $scope.fr = new FileReader;
                $scope.fr.onload = function (smth) {
                    var img = new Image();
                    img.onload = function () {
                    };
                    $timeout(function() {
                        $rootScope.openEditImgPopup(smth.srcElement.result, $scope.imgCreator(img, $scope.fr.result));
                    }, 0)

                };
                $scope.fr.readAsDataURL(this.files[0]);
            });

            element.find('.upload_button').click(function () {
                fileInput.click();
            }).show();
        }
    };
});

AdminApp.directive('imgManager', function (RestService, $state) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            scope.removeImg = function (id, image) {
                RestService.removeShopImage('shop_images/'+ id +'/'+ (angular.isDefined(image) ? image : 'logo')).then(function() {
                    $state.go($state.current, {}, {reload: true});
                });
            };

        }
    }
});