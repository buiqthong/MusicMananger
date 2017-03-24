/**
 * Created by Thong on 25/03/2017.
 */
(function () {
    'use strict';
    angular.module('mainApp')
        .factory('SongsShareService',['$http', function ($http) {
            var service = {};
            var api = {
                song: 'app/songs/songs.json'
            };

            function getListSong() {
                return $http.get(api.song).then(function success(response) {
                    return response.data;
                })
            }

            service.getListSong = getListSong;

            return service;
        }])
})();