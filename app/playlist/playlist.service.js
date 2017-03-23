/**
 * Created by bqthong on 8/2/2016.
 */
(function () {
    'use strict';
    angular.module('mainApp')
        .factory('PlaylistService',function () {
            var service = {};
            service.listColumn = [
                {title: "Name", field: "name"},
                {title: "Description", field: "description"}
            ];
            service.listPlaylist = [
                {id: 1, name: "Nhac tre cho loc", description: "Nhac tre moi hay nhat"},
                {id: 2, name: "Nhac tre 98 2000", description: "Nhac tre xua"},
                {id: 3, name: "Nhac tru tinh", description: "Nhac tru tinh hay nhat"}
            ];
            return service;
        })
})();