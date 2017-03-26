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
                    columns: '=?',
                    columnsTable: '=?',
                    selectedList: '=?',
                    tplDetail: '=?'
                },
                templateUrl: 'component/table/template/table.template.html',
                link: function (scope, element, attrs) {
                    scope.detailTemplateBody = scope.tplDetail;
                    var bodyView = element.find('.body-view');
                    var detailView = element.find('.detail-view');
                    scope.detailTemplate = 'component/table/template/table-detail.template.html';

                    // Show detail view
                    function showDetailView() {
                        scope.hideDetail = false;
                        bodyView.addClass('col-md-6');
                        detailView.addClass('col-md-6');
                    }
                    // Hide detail view
                    scope.hideDetailView = function() {
                        scope.hideDetail = true;
                        bodyView.removeClass('col-md-6');
                        detailView.removeClass('col-md-6');
                    };

                    // Check single select to show detail view
                    scope.checkSingleSelect = function () {
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
                            scope.hideDetailView();
                            scope.selectedList.splice(0, scope.selectedList.length);
                        }
                        else {
                            scope.hideDetailView();
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
                        if(index < 0){
                            scope.hideDetailView();
                            item.selected = true;
                            scope.selectedList.push(item);
                        }
                        else {
                            scope.hideDetailView();
                            scope.selectedList.splice(index,1);
                        }
                        if(scope.checkSingleSelect()){
                            showDetailView();
                        }
                    };

                    // Sort by column
                    scope.sortType = function (valueSort) {
                        if (scope.valueSort === valueSort) {
                            scope.sortReverse = !scope.sortReverse;
                        } else {
                            scope.sortReverse = false;
                        }
                        scope.valueSort = valueSort;
                    };

                    scope.$on('hideDetailView',function(event, data){
                        scope.hideDetailView();
                    });

                }
            }
        })
})();