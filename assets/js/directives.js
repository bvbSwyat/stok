/**
 * Created by swyat on 19.04.15.
 */
var NgApp = angular.module("NgApp", [
    "ui.bootstrap",
    "ngRoute",
    "LocalStorageModule",
    "yaMap",
    "ngResource"
]);

NgApp.controller('MainController', function () {

});

// NgApp.config(['$locationProvider', 'yaMapSettingsProvider',
//     function ($locationProvider, yaMapSettingsProvider) {
//         yaMapSettingsProvider.setLanguage('uk_UA');
//     }
// ]);

/**
* @directive headerMenu - directive for header menu
*/
NgApp.directive('headerMenu', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(window).scroll(function () {
                var logo = element.closest('.header').find('h2');
                if ($(this).scrollTop() > 0) {
                    element.addClass('default_small', 400);
                    logo.addClass('logo_small', 400);

                } else {
                    element.removeClass('default_small', 400);
                    logo.removeClass('logo_small', 400);
                }
            })
        }
    }
});
//
// /**
//  * @directive ngAnchor - directive for setting custom anchor without hash
//  */
// NgApp.directive('ngAnchor', function(localStorageService) {
//     return {
//         restrict: 'A',
//         link: function ($scope, element, attrs) {
//             if (angular.isDefined(attrs.ngAnchor)) {
//                 var scrollPosition = localStorageService.get('scrollPosition');
//                 if (angular.isDefined(scrollPosition) && scrollPosition != null && scrollPosition.length > 0) {
//                     goScroll(scrollPosition);
//                 }
//                 localStorageService.remove('scrollPosition');
//
//                 function goScroll(scrollType) {
//                     var marginVal = 0;
//                     switch(scrollType) {
//                         case "afterBanner": {
//                             marginVal = 55;
//                         }
//                     }
//                     $("body").animate({ scrollTop: element.position().top - marginVal}, 300);
//                 }
//             } else {
//                 throw new Error('NgAnchor. There is no anchor parameter!');
//             }
//
//             $scope.initAnchor = function(scrollType) {
//                 if (angular.isDefined(scrollType)) {
//                     localStorageService.set('scrollPosition', scrollType);
//                 } else {
//                     throw new Error('NgAnchor. Problem with setting anchor!');
//                 }
//             }
//         }
//     }
// });
//
// /**
//  * @directive chainStores - directive for setting chain stores list into header menu
//  */
// NgApp.directive('chainStores', function(RestService, $compile) {
//     return {
//         restrict: 'E',
//         link: function ($scope, element, attrs) {
//
//                 RestService.getChainStores().then(function(chainStores) {
//                 angular.forEach(chainStores, function(chainItem) {
//                     element.append("<li><a href='/filter/wide="+ chainItem.id +";'>"+ chainItem.name +"</a></li>");
//                 });
//                 $compile(element.contents())($scope);
//             });
//         }
//     }
// });
//
NgApp.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

NgApp.directive('ngSearch', function() {
    return {
        restrict: 'A',
        link: function ($scope, element, attrs) {

            $scope.setSearchFocus = function() {
                $scope.searchValue = "";
                element.focus();
            }

            $scope.search = function() {
                if ($scope.searchValue.length > 0) {
                    $scope.toggleFilter('search', $scope.searchValue.replace(/[^\d\w\s\.\,А-я]/g, " "));
                }
            }
        }
    }
});

NgApp.directive('ngNotNull', function() {
    return {
        restrict: 'A',
        priority: 0,
        compile: function() {
            return {
                pre: function preLink($scope, element, attrs) {
                    if (attrs.ngNotNull != 'null') {
                        element.show();
                    } else {
                        element.hide();

                    }
                }
            }
        }
    }
});

/**
 * @directive slider - directive for slider
 */
NgApp.directive('slider', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $.getScript('http://responsiveslides.com/responsiveslides.min.js', function () {
                $(".slider").responsiveSlides({
                    speed: 1000
                });
                /*
                 auto: true,             // Boolean: Animate automatically, true or false
                 speed: 500,            // Integer: Speed of the transition, in milliseconds
                 timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
                 pager: false,           // Boolean: Show pager, true or false
                 nav: false,             // Boolean: Show navigation, true or false
                 random: false,          // Boolean: Randomize the order of the slides, true or false
                 pause: false,           // Boolean: Pause on hover, true or false
                 pauseControls: true,    // Boolean: Pause when hovering controls, true or false
                 prevText: "Previous",   // String: Text for the "previous" button
                 nextText: "Next",       // String: Text for the "next" button
                 maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
                 navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
                 manualControls: "",     // Selector: Declare custom pager navigation
                 namespace: "rslides",   // String: Change the default namespace used
                 before: function(){},   // Function: Before callback
                 after: function(){}     // Function: After callback
                 */

            });
        }
    }
});

/**
 * @directive slider - directive for slider
 */
NgApp.directive("starRating", function () {
    return {
        restrict: "EA",
        template: "<ul ng-if='stars.length > 0' class='rating' ng-class='{readonly: readonly}'>" +
        "  <li ng-repeat='star in stars' ng-class='star' ng-click='toggle($index)'>" +
        "  </li>" +
        "</ul>",
        scope: {
            ratingValue: "=ngModel",
            stars: "=?",
            max: "=?", //optional: default is 5
            onRatingSelected: "&?",
            readonly: "=?"
        },
        link: function (scope, elem, attrs) {
            if (scope.max == undefined) {
                scope.max = 5;
            }
            function updateStars() {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };
            scope.toggle = function (index) {
                if (scope.readonly == undefined || scope.readonly == false) {
                    scope.ratingValue = index + 1;
                    //scope.onRatingSelected({
                    //    rating: index + 1
                    //});
                }
            };
            scope.$watch("ratingValue", function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    };
});

/**
 * @directive slider - directive for paginator
 */
NgApp.directive("ngPagination", function ($window, $rootScope, $location) {
    return {
        restrict: "A",
        link: function ($scope, elem, attrs) {
            //change it in html too
            $scope.itemsPerPage = 10;
            $scope.maxSize = 5;
            $scope.bigTotalItems = 175;
            $scope.firstText = "Перша";
            $scope.lastText = "Остання";
            $scope.prevText = "Попередня"
            $scope.nextText = "Наступна";

            $scope.$watch('currentPage', function(value, prev) {
                if (value != prev) {
                    if (value === 1) {
                        $window.location.pathname = $scope.changeInUrl('page', null);
                    } else{

                        $window.location.pathname = $scope.changeInUrl('page', value);
                    }
                }

            })
        }
    };
});

/**
 * @directive slider - directive for setting filter
 */
NgApp.directive("ngFilter", function ($window, $rootScope) {
    return {
        restrict: "A",
        link: function ($scope, elem, attrs) {
            $scope.filters = urlFiltersParser();

            function urlFiltersParser() {
                var filters = {
                    goods: [],
                    size: [],
                    type: [],
                    min_price: [],
                    max_price: [],
                    wide: [],
                    rating: [],
                    price: [],
                    days_price: [],
                    search: [],

                };
                var filtersString = $window.location.pathname.match(/\/filter\/([A-z;%,_0-9=-]+).*$/);
                var pairsObj = filtersString != null && angular.isDefined(filtersString[1])
                    ? angular.isDefined(filtersString[1].split(';'))
                        ? filtersString[1].split(';')
                        : [filtersString[1]]
                    : [];
                angular.forEach(pairsObj, function(pair) {
                    var pairEl = decodeURIComponent(pair).split(/=|,/g);
                    if (angular.isDefined(pairEl)) {
                        var objName = pairEl[0];
                        pairEl.splice(0,1);
                        filters[objName] = pairEl;
                    }
                })
                console.log(filters)
                return filters;
            }

            function addPriceFiltersUrl(filtersUrl, filterName) {
                console.log(filtersUrl)

                return filtersUrl
            }

            function createFiltersUrl(filterName) {
                var filtersUrl = "";
                if (angular.isDefined($scope.filters)) {
                    var setedPrice = false;
                    angular.forEach($scope.filters, function(filterValues, filterName) {
                        console.log(filterValues, filterName)
                        if (filterName != "price" && filterName != "days_price") {
                            filterValues.length > 0
                                ? filtersUrl += filterName + "=" + encodeURIComponent(filterValues.join()) + ";"
                                : filtersUrl;
                        } else if (setedPrice == false) {
                            setedPrice = true;
                            if (angular.isDefined($rootScope.price)) {
                                angular.forEach($rootScope.price, function (priceObj, priceType) {
                                    console.log(filterName, priceType)
                                    if (priceType == 'genPrice') {
                                        if (priceObj.length != 0) {
                                            filtersUrl += 'price=' + priceObj[0] + '-' + priceObj[1] + ';';
                                        } else if (priceObj.length != 0 && angular.isDefined($scope.filters.price)) {
                                            filtersUrl += $scope.filters.price[0] +';';
                                        }
                                    }
                                    if (priceType == 'daysPrice') {
                                        var priceUrl = [];
                                        var priceDays = [];
                                        angular.forEach(priceObj, function (price, priceDay) {
                                            if (price.length > 0) {
                                                priceDays.push(priceDay);
                                                priceUrl.push(priceDay + '_' + price[0] + '-' + price[1]);
                                            }
                                        })
                                        angular.forEach($scope.filters.days_price, function (priceString) {
                                            var priceFilterDayPrice = priceString.split('=');
                                            priceFilterDayPrice = priceFilterDayPrice[0].split('_');
                                            var priceFilterDay = priceFilterDayPrice[0];
                                            if (priceDays.indexOf(priceFilterDay) == -1) {
                                                priceUrl.push(priceString);
                                            }
                                        })
                                        filtersUrl += priceUrl.length != 0 ? 'days_price=' + encodeURIComponent(priceUrl.join()) + ';' : "";
                                    }
                                });
                            }
                        }

                    })
                }
                //filtersUrl = addPriceFiltersUrl(filtersUrl, filterName);
                //console.log(filtersUrl)
                return filtersUrl;
            }

            $scope.getFilterStatus = function (filterValue, filterName) {
                return angular.isDefined(filterValue)
                    ? $scope.filters[filterName].indexOf(filterValue) != -1
                    : false;
            }

            $scope.getFilterVisibility = function (filterObj) {
                var filterVisibility = false;
                if (angular.isDefined(filterObj)) {
                    angular.forEach(filterObj, function (filterItems) {
                        console.log(filterItems)
                        if (angular.isDefined(filterItems.show)) {
                            filterVisibility = filterItems.show == true;
                        } else {
                            console.error('getFilterVisibility function is not working');
                        }
                    })
                }
                return filterVisibility;
            }

            $scope.toggleFilter = function(filterName, filterVal) {
                if (angular.isDefined($scope.filters)
                && angular.isDefined($scope.filters[filterName])) {
                    if (angular.isArray($scope.filters[filterName])) {
                        //for shops only remove if is defined
                        if (filterName == 'search') {
                            if ($scope.filters[filterName][0] == filterVal) {
                                delete $scope.filters[filterName];
                            } else {
                                $scope.filters[filterName][0] = filterVal;
                            }
                        } else {
                            var alreadyExistsIndex = $scope.filters[filterName].indexOf(filterVal);
                            if (alreadyExistsIndex != -1) {
                                $scope.filters[filterName].splice(alreadyExistsIndex, 1);
                            } else {
                                $scope.filters[filterName].push(filterVal);
                            }
                        }
                    }
                }

                var filtersUrl = createFiltersUrl(filterName);
                $scope.initAnchor("afterBanner");
                if (filtersUrl.length > 0) {
                    $window.location.assign('/filter/'+ filtersUrl);
                } else {
                    $window.location.assign("/");
                }
            }

            $scope.getPriceObj = function(priceObjStrs, day) {
                var priceObj = {}
                if (angular.isDefined(priceObjStrs) && priceObjStrs.length > 0) {
                    if (angular.isDefined(day)) {
                        angular.forEach(priceObjStrs, function (priceItem) {
                            var priceFilterArray = priceItem.split('_');
                            var priceFilterDay = priceFilterArray[0];
                            if (angular.isDefined(priceFilterDay) && day == priceFilterDay) {
                                var priceArray = priceFilterArray[1].split('-');
                                if (priceArray.length == 2 && parseInt(priceArray[0]) <= parseInt(priceArray[1])) {
                                    priceObj = {day: priceFilterDay, price: priceArray};
                                }

                            }
                        })
                    } else {
                        var priceArray = priceObjStrs[0].split('-');
                        if (priceArray.length == 2 && parseInt(priceArray[0]) <= parseInt(priceArray[1])) {
                            priceObj = {price: priceArray};
                        }
                    }
                }
                return priceObj;
            }
        }
    };
});

NgApp.directive('sliderPrice', function ($rootScope, $interval) {
    return {
        restrict: "A",
        link: function (scope, elem, attrs) {
            var intr = $interval(function() {
                if (angular.isDefined(scope.filters)) {
                    var minValue = parseInt(attrs.min);
                    var maxValue = parseInt(attrs.max);
                    var minPrice = minValue;
                    var maxPrice = maxValue;

                    function completePriceRanges() {
                        var completeDaysPriceRanges = angular.isDefined(attrs.day);
                        var innerPriceObj = completeDaysPriceRanges ? scope.filters.days_price : scope.filters.price;
                        var priceObj = scope.getPriceObj(innerPriceObj, attrs.day).price;
                        if (angular.isDefined(priceObj) && priceObj[0] > minValue && priceObj[0] <= maxValue) {
                            minPrice = priceObj[0];
                            if (completeDaysPriceRanges) {
                                $rootScope.price.daysPrice[attrs.day][0] = minPrice;
                                if (angular.isDefined(priceObj) && priceObj[1] < maxValue && priceObj[1] > minValue) {
                                    $rootScope.price.daysPrice[attrs.day][1] = priceObj[1];
                                } else {
                                    $rootScope.price.daysPrice[attrs.day][1] = maxValue;
                                }
                            } else {
                                $rootScope.price.genPrice[0] = minPrice;
                                if (angular.isDefined(priceObj) && priceObj[1] < maxValue && priceObj[1] > minValue) {
                                    $rootScope.price.genPrice[1] = priceObj[1];
                                } else {
                                    $rootScope.price.genPrice[1] = maxValue;
                                }
                            }
                        }
                        if (angular.isDefined(priceObj) && priceObj[1] < maxValue && priceObj[1] > minValue) {
                            maxPrice = priceObj[1];
                            if (completeDaysPriceRanges) {
                                $rootScope.price.daysPrice[attrs.day][1] = maxPrice;
                                if (angular.isDefined(priceObj) && priceObj[0] > minValue && priceObj[0] <= maxValue) {
                                    $rootScope.price.daysPrice[attrs.day][0] = priceObj[0];
                                } else {
                                    $rootScope.price.daysPrice[attrs.day][0] = minValue;
                                }
                            } else {
                                $rootScope.price.genPrice[1] = maxPrice;
                                if (angular.isDefined(priceObj) && priceObj[0] > minValue && priceObj[0] <= maxValue) {
                                    $rootScope.price.genPrice[0] = priceObj[0];
                                } else {
                                    $rootScope.price.genPrice[0] = minValue;
                                }
                            }
                        }
                    }

                    completePriceRanges();

                    $(elem).slider({
                        range: true,
                        min: minValue,
                        max: maxValue,
                        values: [minPrice, maxPrice],
                        slide: function (event, ui) {
                            var minSlide = ui.values[0];
                            var maxSlide = ui.values[1];
                            if (angular.isDefined(attrs.day)) {
                                if ($rootScope.price.daysPrice[attrs.day].length == 0
                                    || (minValue >= minSlide || maxValue >= maxSlide)) {
                                    $rootScope.price.daysPrice[attrs.day][0] = minSlide;
                                    $rootScope.price.daysPrice[attrs.day][1] = maxSlide;
                                } else {
                                    $rootScope.price.daysPrice[attrs.day] = [];
                                }
                            } else {
                                if ($rootScope.price.genPrice.length == 0 || (minValue != minSlide || maxValue != maxSlide)) {
                                    $rootScope.price.genPrice[0] = minSlide;
                                    $rootScope.price.genPrice[1] = maxSlide;
                                } else {
                                    $rootScope.price.genPrice = [];
                                }

                            }
                            $rootScope.$apply();
                        }
                    });
                    $interval.cancel(intr);
                }
            },50)
        }
    }
});

NgApp.filter("sizeFilter", function () {
    return function (size) {
        var ret_size = "Малий";
        switch (size) {
            case "b":
            {
                ret_size = "Великий";
                break;
            }
            case "m":
            {
                ret_size = "Середній";
                break;
            }
        }
        return ret_size;
    }
})

NgApp.filter("currentPage", function ($rootScope) {
    return function (currentPage) {
        $rootScope.currentPage = currentPage;
        return currentPage;
    }
})

NgApp.filter("typeFilter", function () {
    return function (size) {
        var ret_type = "Секонд Хенд";
        switch (size) {
            case "st":
            {
                ret_type = "Сток";
                break;
            }
            case "ss":
            {
                ret_type = "Секонд Хенд / Сток";
                break;
            }
        }
        return ret_type;
    }
})

NgApp.filter("dayFilter", function () {
    return function (day) {
        var engDays = {'mo': 'Пн', 'tu': 'Вт', 'we': 'Ср', 'th': 'Чт', 'fr': 'Пт', 'sa': 'Сб', 'su': 'Нд'};
        return engDays[day];
    }
})

// NgApp.directive("checkbox", function () {
//     return {
//         scope: {},
//         restrict: "E",
//         replace: "true",
//         template: "<button type=\"button\" ng-style=\"stylebtn\" class=\"btn btn-default\" ng-class=\"{'btn-xs': size==='default', 'btn-xl': size==='medium', 'btn-sm': size==='large', 'btn-lg': size==='largest'}\">" +
//         "<span ng-style=\"styleicon\" class=\"glyphicon\" ng-class=\"{'glyphicon-ok': checked===true}\"></span>" +
//         "</button>",
//         link: function (scope, elem, attrs) {
//             scope.size = "default";
//             // Default Button Styling
//             scope.stylebtn = {};
//             // Default Checkmark Styling
//             scope.styleicon = {"width": "10px", "left": "-1px"};
//             // If size is undefined, Checkbox has normal size (Bootstrap 'xs')
//             if (attrs.large !== undefined) {
//                 scope.size = "large";
//                 scope.stylebtn = {"padding-top": "2px", "padding-bottom": "2px", "height": "30px"};
//                 scope.styleicon = {"width": "8px", "left": "-5px", "font-size": "17px"};
//             }
//             if (attrs.larger !== undefined) {
//                 scope.size = "larger";
//                 scope.stylebtn = {"padding-top": "2px", "padding-bottom": "2px", "height": "34px"};
//                 scope.styleicon = {"width": "8px", "left": "-8px", "font-size": "22px"};
//             }
//             if (attrs.largest !== undefined) {
//                 scope.size = "largest";
//                 scope.stylebtn = {"padding-top": "2px", "padding-bottom": "2px", "height": "45px"};
//                 scope.styleicon = {"width": "11px", "left": "-11px", "font-size": "30px"};
//             }
//
//             //// Update element when model changes
//             scope.$watch(attrs.status, function () {
//                 scope.checked = scope.$eval(attrs.status);
//             }, true);
//
//             // On click swap value and trigger onChange function
//             //console.log(elem.parent())
//             elem.parent().bind("click", function () {
//                 scope.checked = !scope.$eval(attrs.status);
//             });
//         }
//     };
// });
// /**
//  * @directive mapPopup - directive for opening map popup
//  */
// NgApp.directive("mapPopup", function () {
//     return {
//         restrict: "A",
//         link: function (scope, elem, attrs) {
//
//             if (attrs.location == 'undefined') {
//                 elem.hide();
//             }
//             elem.click(function() {
//                 var location = attrs.location.match(/\S+/g);
//                 var modalInstance = scope.openPopup({
//                     controller: PopupController,
//                     templateUrl: '/templates/directives/mapPopup.html',
//                     size: 'lg',
//                     resolve: {
//                         popupData: function () {
//                             return {
//                                 location: location,
//                                 iconObj: {
//                                     info: {
//                                         geometry: {
//                                             type: "Point",
//                                             coordinates: location
//                                         },
//                                         properties: {
//                                             balloonContent: '<strong>' + attrs.shopname + '</strong></br><i>' + attrs.shopaddess + '</i>'
//                                         }
//                                     },
//                                     style: {preset: 'islands#icon', iconColor: attrs.shopcolor}
//                                 }
//                             };
//                         }
//                     }
//                 });
//             })
//         }
//     }
// });

/**
 * @directive comments - directive for getting comments data
 */
NgApp.directive("comments", function (RestService) {
    return {
        restrict: "A",
        link: function (scope, elem, attrs) {

            if (angular.isUndefined(attrs.comments)) {
                return;
            }
            scope.noComments = false;
            scope.crating = 5;

            scope.sendNewComment = function(formObj) {
                if (formObj.$valid) {
                    RestService.createComment(attrs.comments, scope.cemail, scope.crating, scope.ccomment).then(function(data) {
                        scope.crating = 5;
                        scope.cemail = "";
                        scope.ccomment = "";
                        alert("Ваш коментар прийнято. Він буде доступний після перевірки.");
                    });
                }
            }

            scope.getComments = function() {
                RestService.getComments(attrs.comments).then(function(response, data) {
                    console.log(response[0])
                    if (angular.isUndefined(response[0])) {

                        //setTimeout(function() {
                        scope.noComments = true;
                        //},500);
                    } else {
                        scope.commentsList = response;
                    }

                }, function() {
                    scope.noComments = true;
                })
            };

            scope.getComments();
        }
    }
});


