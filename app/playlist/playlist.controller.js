/**
 * Created by bqthong on 8/2/2016.
 */
(function(){
    'use strict';
    angular.module('mainApp')
        .controller('PlaylistController', ControllerFn);
    ControllerFn.$inject =  ['PlaylistService','MusicConstant'];
    function ControllerFn(PlaylistService,MusicConstant) {
        var vm = this;
        vm.currentTemplate = MusicConstant.playlist.templateUrl.view;
        vm.breadcrumb = [
            {
                title: 'Playlist',
                link: function () {

                }
            }
        ];
        vm.listPlaylist = PlaylistService.listPlaylist;
        vm.configColumnPlaylistTable = PlaylistService.listColumn;
        vm.selectedPlaylist = [];
}
})();