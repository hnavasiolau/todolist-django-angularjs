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
        this.todoLists = todoLists;

        this.addNewTaskToList = function(todolist){
            todolist.tasks.push(todolist.newTask);
            this.resetNewTask(todolist);
        };

        this.resetNewTask = function(todolist){
            todolist.newTask = {text:"", completed:false};
        };

        this.completeAll = function(todolist){
            angular.forEach(todolist.tasks, function (value, key) {
                value.completed = todolist.allCompleted;
            });
        };

        this.removeTask = function(task, todolist){
            todolist.tasks.splice(todolist.tasks.indexOf(task), 1);
        };

        this.startEditing = function (task) {
            task.editing = true;
        };

        this.doneEditing = function (task) {
            task.editing = false;
        };

        angular.forEach(this.todoLists, function(todoList, key) {
            this.resetNewTask(todoList);
        }, this);
    });


    var taskListMonday = [
        {
            text: 'learn angular',
            completed: false
        },
        {
            text: 'set up django project',
            completed: true
        }
    ];

    var taskListTuesday = [
        {
            text: 'learn django',
            completed: false
        },
        {
            text: 'set up angular project',
            completed: true
        }
    ];

    var todoLists = [
        {
            day : "Monday",
            tasks : taskListMonday
        },
        {
            day : "Tuesday",
            tasks : taskListTuesday
        }
    ];
})();