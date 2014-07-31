(function(){
    var taskList = angular.module( 'task-list',[
        'common.ng-enter',
        'task-list.api-service'
    ]);

    taskList.directive('task', function(){
        return {
            restrict: 'E',
            templateUrl: "task-list/task.tpl.html"
        };
    });

    taskList.controller('TaskListController',
        ['TodoList', 'TodoListItem', function(TodoList, TodoListItem){


        var todoLists = TodoList.query(function(){
            angular.forEach(todoLists, function(todoList, key) {
                todoList.tasks = TodoListItem.query({todoList : todoList.id});
            });
        });

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
    }]);
})();