/**
 * Created by bqthong on 8/2/2016.
 */
(function(){
    'use strict';
    angular.module('mainApp')
        .controller('SongsController', controllerFn);
    controllerFn.$inject = ['SongsService', 'SongsShareService', 'MusicConstant'];
    function controllerFn(SongsService, SongsShareService, MusicConstant) {
        var vm = this;
        vm.cache = SongsService.cache;
        vm.constant = MusicConstant;
        vm.breadcrumb = [
            {
                title: 'Songs',
                link: function () {

                }
            }
        ];
        vm.cache.currentView = vm.constant.song.templateUrl.view;
        function getList() {
            SongsShareService.getListSong().then(function (response) {
                vm.listSongs = response;
            },function () {
                vm.messageError = true;
                vm.messageErrorContent = 'Something went wrong !'
            });
        }
        getList();

        vm.configColumnSongsTable = [
            {title: "Name", field: "name"},
            {title: "Artist", field: "artist"},
            {title: "View", field: "view"}
        ];
        vm.selectedSongs = [];
        vm.modalTitle = 'Delete song';
        vm.modalBody = 'Are you sure you want to delete this song';

        vm.checkActiveEditBtn = function () {
            return vm.selectedSongs.length === 1;
        };

        vm.checkActiveDeleteBtn = function () {
            return vm.selectedSongs.length >= 1;
        };

        vm.valueNotChanged = function () {
            return vm.cache.currentItemJSON === angular.toJson(vm.cache.currentItem);
        };

        vm.checkValidForm = function () {
            return !vm.cache.currentItem[vm.constant.song.attrs.name];
        };

        vm.goToHome = function () {
            vm.cache.currentItem = {};
            vm.cache.currentView = vm.constant.song.templateUrl.view;
        };
        
        vm.addSongForm = function () {
            vm.isCreate = true;
            vm.isEdit = false;
            vm.cache.currentView = vm.constant.song.templateUrl.action;
            
        };

        vm.actionAddSong = function () {
            var reqBody = {
                id: Math.random().toString(36).slice(2),
                name: vm.cache.currentItem.name,
                artist: vm.cache.currentItem.artist,
                view: 0
            };
            SongsService.createSong(reqBody).then(function success() {

            },function error() {

            })
            .finally(function () {
                vm.goToHome();
            })
        };

        vm.actionEditSong = function () {

        };


        vm.editSongForm = function () {
            vm.isEdit = true;
            vm.isCreate = false;
            vm.cache.currentItem = vm.selectedSongs[0];
            vm.cache.currentItemJSON = angular.toJson(vm.cache.currentItem);
            console.log(vm.cache.currentItemJSON);
            vm.cache.currentView = vm.constant.song.templateUrl.action;
        };

        vm.deleteSongDialog = function () {
            showDialog();

        };

        vm.refreshData = function () {
            getList();
        }

    }
})();