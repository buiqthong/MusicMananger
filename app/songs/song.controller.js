/**
 * Created by bqthong on 8/2/2016.
 */
(function(){
    'use strict';
    angular.module('mainApp')
        .controller('SongsController', controllerFn);
    controllerFn.$inject = ['SongsService', 'MusicConstant'];
    function controllerFn(SongsService,MusicConstant) {
        var vm = this;
        vm.cache = SongsService.cache;
        vm.breadcrumb = [
            {
                title: 'Songs',
                link: function () {

                }
            }
        ];

        vm.cache.currentView = SongsService.getCurrentView().view.templateUrl;
        vm.listSongs = SongsService.listSongs;
        vm.configColumnSongsTable = SongsService.listColumn;
        vm.selectedSongs = [];
        vm.modalTitle = 'Delete song';
        vm.modalBody = 'Are you sure you want to delete this song';

        vm.isCreate = function () {
            return vm.cache.currentView.id === MusicConstant.mode.create;
        };

        vm.isEdit = function () {
            return vm.cache.currentView.id === MusicConstant.mode.edit;
        };

        vm.goToHome = function () {
            vm.cache.currentView = SongsService.getCurrentView().view.templateUrl;
        };
        
        vm.addSong = function () {
            vm.cache.currentView = SongsService.getCurrentView().add.templateUrl;
            
        };

        vm.editSong = function () {
            vm.cache.currentView = SongsService.getCurrentView().edit.templateUrl;

        };

        vm.deleteSong = function () {
            showDialog();

        };

    }
})();