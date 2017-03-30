/**
 * Created by bqthong on 8/2/2016.
 */
(function(){
    'use strict';
    angular.module('songApp')
        .controller('SongsController', SongsControllerFn);
    SongsControllerFn.$inject = ['$rootScope','$i18next','SongsService', 'PlaylistShareService', 'SongsShareService', 'MusicConstant'];
    function SongsControllerFn($rootScope,$i18next, SongsService, PlaylistShareService, SongsShareService, MusicConstant) {
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
        vm.songDetailTemplate = vm.constant.song.templateUrl.detail;
        function getList() {
            SongsShareService.getList().then(function (response) {
                vm.listSongs = response;
            },function () {
                vm.messageError = true;
                vm.messageErrorContent = 'Something went wrong !'
            });
        }
        getList();
        function getListPlaylist() {
            PlaylistShareService.getList().then(function (response) {
                vm.listPlaylistTemp = angular.copy(response);
                for(var i =0; i < vm.listPlaylistTemp.length; i++){
                    delete vm.listPlaylistTemp[i].song;
                }
                vm.listPlaylist = vm.listPlaylistTemp;
            },function () {
                vm.messageError = true;
                vm.messageErrorContent = 'Something went wrong !'
            });
        }
         
        vm.allSongColumn = [
            {title: $i18next('song.column.name'), field: "name"},
            {title: $i18next('song.column.artist'), field: "artist"},
            {title: $i18next('song.column.playlist'), field: "playlist"},
            {title: $i18next('song.column.view'), field: "view"}
        ];
        vm.columnSongsTable = [
            {title: $i18next('song.column.name'), field: "name"},
            {title: $i18next('song.column.artist'), field: "artist"},
            {title: $i18next('song.column.view'), field: "view"}
        ];

        vm.selectedSongs = [];
        //config for modal dialog
        vm.idModal = 'song-modal';
        vm.titleModal = 'Delete song';
        vm.bodyModal = 'Are you sure you want to delete this song';
        vm.cache.currentItem = vm.selectedSongs[0];

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
            if(vm.cache.currentItem !== undefined){
                return !vm.cache.currentItem[vm.constant.song.attrs.name];
            }
        };

        vm.goToHome = function () {
            vm.cache.currentItem = {};
            vm.cache.currentView = vm.constant.song.templateUrl.view;
            getList();
        };
        
        vm.addSongForm = function () {
            vm.isCreate = true;
            vm.isEdit = false;
            getListPlaylist();
            vm.cache.currentView = vm.constant.song.templateUrl.action;
            
        };

        vm.actionAddSong = function () {
            var reqBody = {
                id: Math.random().toString(36).slice(2),
                name: vm.cache.currentItem.name,
                artist: vm.cache.currentItem.artist,
                view: 0,
                playlist: vm.selectedListItem
            };
            SongsService.createSong(reqBody);
            vm.messageSuccess = true;
            vm.messageSuccessContent = 'Create song successfully !';
            vm.goToHome();
        };

        vm.editSongForm = function () {
            vm.isEdit = true;
            vm.isCreate = false;
            vm.cache.currentItem = vm.selectedSongs[0];
            vm.cache.currentItemJSON = angular.toJson(vm.cache.currentItem);
            vm.cache.currentView = vm.constant.song.templateUrl.action;
        };

        vm.actionEditSong = function () {
            SongsService.editSong(vm.cache.currentItem);
            vm.messageSuccess = true;
            vm.messageSuccessContent = 'Edit song successfully !';
            vm.goToHome();
        };

        vm.actionDeleteSong = function () {
            var listId = _.map(vm.selectedSongs, function (item) {
                return item[vm.constant.song.attrs.id];
            });
            SongsService.deleteSong(listId);
            vm.messageSuccess = true;
            vm.messageSuccessContent = 'Delete song successfully !';
            vm.selectedSongs = [];
            $rootScope.$broadcast('hideDetailView',{});
            vm.goToHome();
        };

        vm.refreshData = function () {
            getList();
        }

    }
})();