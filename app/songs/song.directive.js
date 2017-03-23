/**
 * Created by bqthong on 8/4/2016.
 */
(function () {
    'use strict';
    angular.module('mainApp')
        .directive('songDirective',['MusicConstant', function (MusicConstant) {
            return {
                restrict: 'AE',
                scope: {},
                templateUrl: MusicConstant.music.templateUrl,
                controller: 'SongsController',
                controllerAs: 'vm'
            }
        }])
})();