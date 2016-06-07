/**
 * Created by swyat on 29.04.15.
 */

angular.module('AppConfig', [])
    // config module has provider with same name
.provider('AppConfig', [function () {
    var config = {
            serviceBasePath: "http://stok.if.ua/api"
        };

        return {
            defaults: config,

            set: function (settings) {
                config = settings;
            },
            merge: function (settings) {
                angular.extend(config, settings);
            },
            $get: function () {
                return config;
            }
        };
}]);
