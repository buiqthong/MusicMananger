/**
 * Created by bqthong on 8/15/2016.
 */
(function () {
    'use strict';
    angular.module('mainApp')
        .constant('MusicConstant', {
            vm: 'vm',
            mode: {
                create: 'create',
                edit: 'edit',
                delete: 'delete'
            },
            song: {
                templateUrl: {
                    main: 'app/songs/main.html',
                    action: 'app/songs/action/song.action.html',
                    directive: 'app/songs/template/song.directive.html',
                    view: 'app/songs/template/song.view.html'
                }
            },
            playlist: {
                templateUrl: {
                    main: 'app/playlist/main.html',
                    action: 'app/playlist/action/playlist.action.html',
                    directive: 'app/playlist/template/playlist.directive.html',
                    view: 'app/playlist/template/playlist.view.html'
                }
            }
        });
})();