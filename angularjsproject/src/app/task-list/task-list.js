angular.module( 'task-list', [
    'ui.router'
])
    .config(function config( $stateProvider ) {
        $stateProvider.state( 'task-list', {
            url: '/task-list',
            views: {
                "main": {
                    templateUrl: 'task-list/task-list.tpl.html'
                }
            }
        });
    });