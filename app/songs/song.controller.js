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
        vm.breadcrumb = [
            {
                title: 'Songs',
                link: function () {

                }
            }
        ];
        vm.currentTemplate = MusicConstant.song.templateUrl.view;
        vm.listSongs = SongsService.listSongs;
        vm.configColumnSongsTable = SongsService.listColumn;
        vm.selectedSongs = [];
    }
})();