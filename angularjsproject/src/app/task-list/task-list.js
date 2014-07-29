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

taskList.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});

taskList.controller('TaskListController', function(){
    this.tasks = testTasks;

    this.addNewTaskToList = function(){
        this.tasks.push(this.newTask);
        this.resetNewTask();
    };

    this.resetNewTask = function(){
        this.newTask = {text:"", completed:false};
    };

    this.resetNewTask();
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