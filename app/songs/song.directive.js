/**
 * Created by bqthong on 8/4/2016.
 */
(function () {
    'use strict';
    angular.module('songApp')
        .directive('songDirective',songDirectiveFn );
    songDirectiveFn.$inject = ['MusicConstant'];
    function songDirectiveFn(MusicConstant) {
        return {
            restrict: 'AE',
            scope: {},
            templateUrl: MusicConstant.song.templateUrl.main,
            controller: 'SongsController',
            controllerAs: 'vm'
        }
    }
})();