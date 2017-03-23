
/**
 * Created by bqthong on 8/2/2016.
 */
(function () {
    'use strict';
    angular.module('mainApp')
        .factory('SongsService',function () {
            var service = {};
            service.listColumn = [
                {title: "Name", field: "name"},
                {title: "Artist", field: "artist"},
                {title: "View", field: "view"}
            ];
            service.listSongs = [
                {id: 1, name: "Tha rang nhu the", artist: "Ung Hoang Phuc", view: 35000},
                {id: 2, name: "Dang Em", artist: "Nguyen Phi Hung", view: 32000},
                {id: 3, name: "Kathy Kathy", artist: "Lam Truong", view: 72000},
                {id: 4, name: "Tha nguoi dung noi", artist: "Dan Truong", view: 35080},
                {id: 5, name: "Got hong", artist: "Lam Truong", view: 3507},
                {id: 6, name: "Tinh don phuong", artist: "Dan Truong", view: 56693},
                {id: 7, name: "Uoc gi", artist: "My Tam", view: 23690},
                {id: 8, name: "Tinh don coi", artist: "Nguyen Phi Hung", view: 35000},
                {id: 9, name: "12 gio", artist: "Ha Anh Tuan", view: 34000},
                {id: 10, name: "Tinh ve noi dau", artist: "Thanh Bui", view: 38001},
                {id: 11, name: "Con buom xuan", artist: "Ho Quang Hieu", view: 35670},
                {id: 12, name: "Tinh khuc vang", artist: "Dan Truong", view: 67901},
                {id: 13, name: "Trong vang", artist: "Phuong Thanh", view: 27508}
            ];
            return service;
        })
})();