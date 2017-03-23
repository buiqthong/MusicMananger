/**
 * Created by bqthong on 8/2/2016.
 */
(function(){
    'use strict';
    angular.module('mainApp')
        .controller('MusicController',['$scope','$i18next',function($scope,$i18next){
            $scope.selectedLang = 'en';
            $scope.langs = [
                {name: 'English',key: 'en'},
                {name: 'Vietnamese',key: 'vi'}
            ];
            $scope.clicked = false;
            $scope.toggleSidebar = function () {
                if($scope.clicked === false){
                    $scope.clicked = true;
                }
                else {
                    $scope.clicked = false;
                }
            };

            $scope.$watch('selectedLang', function () {
                $i18next.options.lng = $scope.selectedLang;
            })
        }]);
})();