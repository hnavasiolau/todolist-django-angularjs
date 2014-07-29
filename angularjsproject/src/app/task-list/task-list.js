(function(){
    var taskList = angular.module( 'task-list',[
        'ui.router',
        'common.ng-enter'
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
        this.allCompleted = false;

        this.addNewTaskToList = function(){
            this.tasks.push(this.newTask);
            this.resetNewTask();
        };

        this.resetNewTask = function(){
            this.newTask = {text:"", completed:false};
        };

        this.completeAll = function(){
            var taskList = this;
            angular.forEach(this.tasks, function (value, key) {
                value.completed = taskList.allCompleted;
            });
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
})();