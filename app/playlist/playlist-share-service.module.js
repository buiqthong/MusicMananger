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
            {id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat", view: 3453,
                song: [
                    {id: 2, name: "Dang Em", artist: "Nguyen Phi Hung", view: 32000, playlist: [{id: 2, name: "Nhac tre 98 2000", description: "Nhac tre xua", view: 23455}]},
                    {id: 3, name: "Kathy Kathy", artist: "Lam Truong", view: 72000, playlist: [{id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat", view: 3453}]}
                ]},
            {id: 2, name: "Nhac tre 98 2000", description: "Nhac tre xua", view: 23455,
                song: [
                    {id: 5, name: "Got hong", artist: "Lam Truong", view: 3507, playlist: [{id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat", view: 3453}]},
                    {id: 6, name: "Tinh don phuong", artist: "Dan Truong", view: 56693, playlist: [{id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat", view: 3453}]}
                ]},
            {id: 3, name: "Nhac tru tinh", description: "Nhac tru tinh hay nhat", view: 78423, song: [{id: 9, name: "12 gio", artist: "Ha Anh Tuan", view: 34000, playlist: [{id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat", view: 3453}]}]}
        ];

        function getList() {
            return $q.when(listPlaylist);
        }
        
        function addSongToPlaylist(playlistId, song) {
            for (var i = 0; i< listPlaylist.length; i++){
                if(playlistId === listPlaylist[i].id){
                    listPlaylist[i].song.push(song);
                }
            }
        }

        service.getList= getList;
        service.addSongToPlaylist= addSongToPlaylist;

        return service;
    }
})();