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
                link: function (scope, element, attrs) {
                    var bodyView = element.find('.body-view');
                    var detailView = element.find('.detail-view');

                    function showDetailView() {
                        bodyView.addClass('col-md-6');
                        detailView.addClass('col-md-6');
                    }

                    function hideDetailView() {
                        bodyView.removeClass('col-md-6');
                        detailView.removeClass('col-md-6');
                    }

                    scope.checkDetailView = function () {
                        return scope.selectedList.length === 1;
                    };

                    // Select check box
                    scope.selectCheckbox = function (item) {
                        for(var i=0;i<scope.selectedList.length;i++){
                            if(scope.selectedList[i].id === item.id) {
                                return true;
                            }
                        }
                    };

                    // Select all check box
                    scope.selectAllCheckbox = function () {
                        if(scope.data.length === scope.selectedList.length){
                            return true;
                        }
                    };

                    // Check all check box
                    scope.checkAll = function () {
                        if(scope.selectAllCheckbox()){
                            scope.selectedList.splice(0, scope.selectedList.length);
                        }
                        else {
                            scope.selectedList.splice(0, scope.selectedList.length);
                            for(var i = 0; i < scope.data.length; i++){
                                scope.data[i].selected = true;
                                scope.selectedList.push( scope.data[i]);
                            }
                        }
                    };

                    // Click on row to select single item
                    scope.clickItem = function (item) {
                        item.selected = true;
                        scope.selectedList.splice(0, scope.selectedList.length);
                        scope.selectedList.push(item);
                        showDetailView();
                    };

                    // Click on check box to select multiple item
                    scope.clickMultipleItem = function (item) {
                        var index = -1;
                        for(var i = 0;i < scope.selectedList.length;i++){
                            if(angular.equals(scope.selectedList[i],item)){
                                index = i;
                                break;
                            }
                        }
                        console.log(index);
                        if(index < 0){
                            hideDetailView();
                            item.selected = true;
                            scope.selectedList.push(item);
                        }
                        else {
                            hideDetailView();
                            scope.selectedList.splice(index,1);
                        }
                    };

                    // Sort
                    scope.sortType = function (valueSort) {
                        if (scope.valueSort === valueSort) {
                            scope.sortReverse = !scope.sortReverse;
                        } else {
                            scope.sortReverse = false;
                        }
                        scope.valueSort = valueSort;
                    };

                    // scope.watchSelectedList = scope.$watch(function () {
                    //     return
                    // }, function (newVal) {
                    //     if(newVal){
                    //         console.log(newVal);
                    //     }
                    // });
                    //
                    // scope.$on('$destroy', function () {
                    //     scope.watchSelectedList();
                    // });

                }
            }
        })
})();