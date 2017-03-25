
/**
 * Created by bqthong on 8/2/2016.
 */
(function () {
    'use strict';
    angular.module('songApp')
        .factory('SongsService', SongsServiceFn);
    SongsServiceFn.$inject = ['SongsShareService'];
    function SongsServiceFn(SongsShareService) {
        var service = {};

        function init() {
            service.cache = {
                currentView: {},
                currentItem: {}
            };
        }
        init();

        function createSong(song) {
            SongsShareService.getList().then(function (response) {
                return response.push(song);
            });
        }

        function editSong(song) {

        }

        function deleteSong(listId) {
            SongsShareService.getList().then(function (response) {
               var listSong =  _.remove(response, function(item){
                    return listId.indexOf(item.id) >= 0;
                });
                return listSong
            });
        }
        service.createSong = createSong;
        service.editSong = editSong;
        service.deleteSong = deleteSong;

        return service;
    }
})();