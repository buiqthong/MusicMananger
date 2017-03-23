/**
 * Created by bqthong on 3/22/2017.
 */
(function () {
    'use strict';
    angular.module('mainApp')
        .directive('breadcrumb', function () {
            return {
                restrict: 'AE',
                scope: {
                    bcData: '='
                },
                templateUrl: 'component/breadcrumb/template/breadcrumb.template.html'
            }
        })
})();