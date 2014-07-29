(function() {
    var app = angular.module('todo-list', [
        'templates-app',
        'templates-common',
        'task-list',
        'ui.router'
    ]);

    app.config(function myAppConfig($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/task-list');
    });

    app.run(function run() {});

    app.controller('AppCtrl', function AppCtrl($scope, $location) {});
})();

