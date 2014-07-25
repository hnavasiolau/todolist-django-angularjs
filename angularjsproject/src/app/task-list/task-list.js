var taskList = angular.module( 'task-list', [
    'ui.router'
]);

taskList.config(function config( $stateProvider ) {
    $stateProvider.state( 'task-list', {
        url: '/task-list',
        views: {
            "main": {
                templateUrl: 'task-list/task-list.tpl.html'
            }
        }
    });
});

taskList.controller('TaskListController', function(){
    this.tasks = testTasks;
});

var testTasks = [
    {
        text: 'learn angular',
        completed: false
    },
    {
        text: 'learn django',
        completed: false
    },
    {
        text: 'set up django project',
        completed: true
    },
    {
        text: 'set up angular project',
        completed: true
    }
];