/**
 * Created by bqthong on 9/9/2016.
 */
(function (){
    'use strict';
    angular.module('mod.modal',[])
        .directive('modal', function () {
            return {
                restrict: 'AE',
                scope: {
                    title: '=',
                    body: '='
                },
                templateUrl: 'component/modal/template/modal.html',
                controller: ['$scope',function ($scope) {

                }]
            };
        })
})();