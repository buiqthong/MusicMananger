/**
 * Created by Thong on 25/03/2017.
 */
(function () {
    'use strict';
    angular.module('playlistShareService', [])
        .factory('PlaylistShareService', PlaylistShareService );
    PlaylistShareService.$inject = ['$q'];
    function PlaylistShareService($q) {
        var service = {};

        var listPlaylist = [
            {id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat", view: 3453},
            {id: 2, name: "Nhac tre 98 2000", description: "Nhac tre xua", view: 23455},
            {id: 3, name: "Nhac tru tinh", description: "Nhac tru tinh hay nhat", view: 78423}
        ];

        function getList() {
            return $q.when(listPlaylist);
        }

        service.getList= getList;

        return service;
    }
})();