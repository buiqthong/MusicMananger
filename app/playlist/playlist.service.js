/**
 * Created by bqthong on 8/2/2016.
 */
(function () {
    'use strict';
    angular.module('playlistApp')
        .factory('PlaylistService', PlaylistServiceFn);
    PlaylistServiceFn.$inject = ['PlaylistShareService'];
    function PlaylistServiceFn(PlaylistShareService) {
        var service = {};

        function init() {
            service.cache = {
                currentView: {},
                currentItem: {}
            };
        }
        init();

        function createPlaylist(playlist) {
            PlaylistShareService.getList().then(function (response) {
                return response.push(playlist);
            });
        }

        function editPlaylist(playlist) {

        }

        function deletePlaylist(listId) {
            PlaylistShareService.getList().then(function (response) {
                var listPlaylist =  _.remove(response, function(item){
                    return listId.indexOf(item.id) >= 0;
                });
                return listPlaylist
            });
        }
        service.createPlaylist = createPlaylist;
        service.editPlaylist = editPlaylist;
        service.deletePlaylist = deletePlaylist;
        return service;
    }
})();