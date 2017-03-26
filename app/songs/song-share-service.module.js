/**
 * Created by Thong on 25/03/2017.
 */
(function () {
    'use strict';
    angular.module('songsShareService', [])
        .factory('SongsShareService', SongsShareServiceFn );
    SongsShareServiceFn.$inject = ['$http','$q'];
    function SongsShareServiceFn($http,$q) {
        var service = {};

        var listSongs = [
            {id: 1, name: "Tha rang nhu the", artist: "Ung Hoang Phuc", view: 35000, playlist: [{id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat", view: 3453},{id: 2, name: "Nhac tre 98 2000", description: "Nhac tre xua", view: 23455}]},
            {id: 2, name: "Dang Em", artist: "Nguyen Phi Hung", view: 32000, playlist: [{id: 2, name: "Nhac tre 98 2000", description: "Nhac tre xua", view: 23455}]},
            {id: 3, name: "Kathy Kathy", artist: "Lam Truong", view: 72000, playlist: [{id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat", view: 3453}]},
            {id: 4, name: "Tha nguoi dung noi", artist: "Dan Truong", view: 35080, playlist: [{id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat", view: 3453}]},
            {id: 5, name: "Got hong", artist: "Lam Truong", view: 3507, playlist: [{id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat", view: 3453}]},
            {id: 6, name: "Tinh don phuong", artist: "Dan Truong", view: 56693, playlist: [{id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat", view: 3453}]},
            {id: 7, name: "Uoc gi", artist: "My Tam", view: 23690, playlist: [{id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat", view: 3453}]},
            {id: 8, name: "Tinh don coi", artist: "Nguyen Phi Hung", view: 35000, playlist: [{id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat", view: 3453}]},
            {id: 9, name: "12 gio", artist: "Ha Anh Tuan", view: 34000, playlist: [{id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat", view: 3453}]},
            {id: 10, name: "Tinh ve noi dau", artist: "Thanh Bui", view: 38001, playlist: [{id: 3, name: "Nhac tru tinh", description: "Nhac tru tinh hay nhat", view: 78423}]}
        ];

        function getList() {
            return $q.when(listSongs);
        }

        service.getList= getList;

        return service;
    }
})();