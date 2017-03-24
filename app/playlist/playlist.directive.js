/**
 * Created by bqthong on 8/4/2016.
 */
(function () {
    'use strict';
    angular.module('mainApp')
        .directive('playlistDirective',[ 'MusicConstant', function (MusicConstant) {
            return {
                restrict: 'AE',
                scope: {},
                templateUrl: MusicConstant.playlist.templateUrl.main,
                controller: 'PlaylistController',
                controllerAs: 'vm'
            }
        }])
})();