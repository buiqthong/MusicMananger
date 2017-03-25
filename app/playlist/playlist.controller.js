/**
 * Created by bqthong on 8/2/2016.
 */
(function(){
    'use strict';
    angular.module('playlistApp')
        .controller('PlaylistController', PlaylistControllerFn);
    PlaylistControllerFn.$inject =  ['$rootScope','$i18next','PlaylistService','PlaylistShareService','MusicConstant'];
    function PlaylistControllerFn($rootScope,$i18next,PlaylistService, PlaylistShareService, MusicConstant) {
        var vm = this;
        vm.cache = PlaylistService.cache;
        vm.constant = MusicConstant;
        vm.cache.currentView = vm.constant.playlist.templateUrl.view;
        vm.breadcrumb = [
            {
                title: 'Playlist',
                link: function () {

                }
            }
        ];

        function getList() {
            PlaylistShareService.getList().then(function (response) {
                vm.listPlaylist = response;
            },function () {
                vm.messageError = true;
                vm.messageErrorContent = 'Something went wrong !'
            });
        }
        getList();
        vm.configColumnPlaylistTable = [
            {title: "Name", field: "name"},
            {title: "Description", field: "description"}
        ];
        vm.selectedPlaylist = [];
        //config for modal dialog
        vm.idModal = 'playlist-modal';
        vm.titleModal = 'Delete playlist';
        vm.bodyModal = 'Are you sure you want to delete this playlist';
        vm.cache.currentItem = vm.selectedPlaylist[0];

        vm.checkActiveEditBtn = function () {
            return vm.selectedPlaylist.length === 1;
        };

        vm.checkActiveDeleteBtn = function () {
            return vm.selectedPlaylist.length >= 1;
        };

        vm.valueNotChanged = function () {
            return vm.cache.currentItemJSON === angular.toJson(vm.cache.currentItem);
        };

        vm.checkValidForm = function () {
            if(vm.cache.currentItem !== undefined){
                return !vm.cache.currentItem[vm.constant.playlist.attrs.name];
            }
        };

        vm.goToHome = function () {
            vm.cache.currentItem = {};
            vm.cache.currentView = vm.constant.playlist.templateUrl.view;
            getList();
        };

        vm.addPlaylistForm = function () {
            vm.isCreate = true;
            vm.isEdit = false;
            vm.cache.currentView = vm.constant.playlist.templateUrl.action;

        };

        vm.actionAddPlaylist = function () {
            var reqBody = {
                id: Math.random().toString(36).slice(2),
                name: vm.cache.currentItem.name,
                description: vm.cache.currentItem.description,
                view: 0
            };
            PlaylistService.createPlaylist(reqBody);
            vm.messageSuccess = true;
            vm.messageSuccessContent = 'Create playlist successfully !';
            vm.goToHome();
        };

        vm.editPlaylistForm = function () {
            vm.isEdit = true;
            vm.isCreate = false;
            vm.cache.currentItem = vm.selectedPlaylist[0];
            vm.cache.currentItemJSON = angular.toJson(vm.cache.currentItem);
            vm.cache.currentView = vm.constant.playlist.templateUrl.action;
        };

        vm.actionEditPlaylist = function () {
            PlaylistService.editPlaylist(vm.cache.currentItem);
            vm.messageSuccess = true;
            vm.messageSuccessContent = 'Edit playlist successfully !';
            vm.goToHome();
        };

        vm.actionDeletePlaylist = function () {
            var listId = _.map(vm.selectedPlaylist, function (item) {
                return item[vm.constant.playlist.attrs.id];
            });
            PlaylistService.deletePlaylist(listId);
            vm.messageSuccess = true;
            vm.messageSuccessContent = 'Delete playlist successfully !';
            vm.selectedPlaylist = [];
            $rootScope.$broadcast('hideDetailView',{});
            vm.goToHome();
        };

        vm.refreshData = function () {
            getList();
        }
    }
})();