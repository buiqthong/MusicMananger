/**
 * Created by bqthong on 8/2/2016.
 */
(function () {
    'use strict';
    angular.module('mod.table',[])
        .directive('tableDirective', function () {
            return {
                restrict: 'AE',
                scope: {
                    data: '=',
                    columns: '=',
                    selectedList: '='
                },
                templateUrl: 'component/table/template/table.template.html',
                controller: ['$scope',function ($scope) {

                    $scope.selectCheckbox = function (item) {
                        for(var i=0;i<$scope.selectedList.length;i++){
                            if($scope.selectedList[i].id === item.id) {
                                return true;
                            }
                        }
                    };

                    // Check all check box
                    $scope.checkAllCheckbox = false;
                    $scope.checkAll = function () {
                        if($scope.checkAllCheckbox){
                            $scope.selectedList.splice(0, $scope.selectedList.length);
                            for(var i = 0; i < $scope.data.length; i++){
                                $scope.data[i].selected = true;
                                $scope.selectedList.push( $scope.data[i]);
                            }
                        }
                        else {
                            $scope.selectedList.splice(0, $scope.selectedList.length);
                        }
                    };

                    // Click on row to select single item
                    $scope.clickItem = function (item) {
                        item.selected = true;
                        $scope.selectedList.splice(0, $scope.selectedList.length);
                        $scope.selectedList.push(item);
                    };

                    // Click on check box to select multiple item
                    $scope.clickMultipleItem = function (item) {
                        var index = -1;
                        for(var i = 0;i < $scope.selectedList.length;i++){
                            if(angular.equals($scope.selectedList[i],item)){
                                index = i;
                                break;
                            }
                        }
                        if(index < 0){
                            item.selected = true;
                            $scope.selectedList.push(item);
                        }
                        else {
                            $scope.selectedList.splice(index,1);
                        }
                    };

                    // Sort
                    $scope.sortReverse = false;
                    $scope.sortType = function (valueSort) {
                        if ($scope.valueSort === valueSort) {
                            $scope.sortReverse = !$scope.sortReverse;
                        } else {
                            $scope.sortReverse = false;
                        }
                        $scope.valueSort = valueSort;
                    };

                    $scope.$watch('selectedList', function (newVal) {
                        if(newVal){
                            console.log(newVal);
                        }
                    })

                }]
            }
        })
})();