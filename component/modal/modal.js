/**
 * Created by bqthong on 9/9/2016.
 */
(function (){
    'use strict';
    angular.module('mod.modal',[])
        .directive('modal', function () {
            return {
                restrict: 'EA',
                scope: {
                    title: '=modalTitle',
                    header: '=modalHeader',
                    body: '=modalBody',
                    callbackbuttonleft: '&ngClickLeftButton',
                    callbackbuttonright: '&ngClickRightButton',
                    handler: '=lolo'
                },
                templateUrl: 'component/modal/template/modal.html',
                transclude: true,
                controller: function ($scope) {
                    $scope.handler = 'modal';
                    $scope.header = 'Delete item';
                    $scope.body = 'Are you sure delete this Item';
                }
            };
        })
})();