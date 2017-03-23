/**
 * Created by bqthong on 8/2/2016.
 */
(function(){
    'use strict';
    angular.module('mainApp')
        .config(['$routeProvider','MusicConstant',function($routeProvider,MusicConstant){
            $routeProvider
                .when('/songs',{
                    templateUrl: MusicConstant.song.templateUrl.directive,
                    controller: 'SongsController',
                    controllerAs:'vm'
                })
                .when('/playlist',{
                    templateUrl: MusicConstant.playlist.templateUrl.directive,
                    controller: 'PlaylistController',
                    controllerAs:'vm'
                })
                .otherwise({
                    redirectTo:'/songs'
                });
        }])
})();