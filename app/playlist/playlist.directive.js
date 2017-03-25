/**
 * Created by bqthong on 8/4/2016.
 */
(function () {
    'use strict';
    angular.module('playlistApp')
        .directive('playlistDirective', playlistDirectiveFn);
    playlistDirectiveFn.$inject = ['MusicConstant'];
    function playlistDirectiveFn(MusicConstant) {
        return {
            restrict: 'AE',
            scope: {},
            templateUrl: MusicConstant.playlist.templateUrl.main,
            controller: 'PlaylistController',
            controllerAs: 'vm'
        }
    }
})();