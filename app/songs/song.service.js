
/**
 * Created by bqthong on 8/2/2016.
 */
(function () {
    'use strict';
    angular.module('mainApp')
        .factory('SongsService',['$http', function ($http) {
            var service = {};
            var api = {
                song: 'app/songs/songs.json'
            };

            // function getListSong() {
            //     return $http.get(api.song).then(function success(response) {
            //          return response.data;
            //     })
            // }

            function init() {
                service.cache = {
                    currentView: {},
                    currentItem: {}
                };
            }
            init();


            function createSong(song) {
                // listSongs.push(song);
            }


            // service.getListSong = getListSong;
            service.createSong = createSong;


            return service;
        }])
})();