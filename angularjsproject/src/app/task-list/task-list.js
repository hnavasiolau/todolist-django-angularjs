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
        ['TodoList', 'TodoListItem', '$log', function(TodoList, TodoListItem, $log){


        var todoLists = TodoList.query(function(){
            angular.forEach(todoLists, function(todoList, key) {
                todoList.tasks = TodoListItem.query({todoList : todoList.id});
            });
        });

        this.todoLists = todoLists;

        var genericResourceErrorCallback = function(errorResult){
            $log.error('Couldn\'t perform operation on server. HTTP error code is: ' + errorResult.status);
        };

        this.addNewTaskToList = function(todolist){
            var taskListCtrl = this;
            var todoListItem = new TodoListItem({
                todoList: todolist.id,
                text: todolist.newTask.text,
                completed: todolist.newTask.completed});
            todoListItem.$save({}, function(successResult) {
                todolist.tasks.push(todoListItem);
                taskListCtrl.resetNewTask(todolist);
            }, genericResourceErrorCallback);
        };

        this.resetNewTask = function(todolist){
            todolist.newTask = {text:"", completed:false};
        };

        this.completeAll = function(todolist){
            angular.forEach(todolist.tasks, function (value, key) {
                value.completed = todolist.allCompleted;
                value.$update({}, function(successResult){
                }, function(errorResult){
                    value.completed = !value.completed;
                    genericResourceErrorCallback(errorResult);
                });
            });
        };

        this.removeTask = function(task, todolist){
            TodoListItem.remove({},{id:task.id},
                function(successResult) {
                    todolist.tasks.splice(todolist.tasks.indexOf(task), 1);
                }, genericResourceErrorCallback);
        };

        this.startEditing = function (task) {
            task.editing = true;
        };

        this.doneEditing = function (task) {
            task.$update({}, function(successResult){
                task.editing = false;
            },genericResourceErrorCallback);
        };

        this.updateCompleted = function(task) {
            task.$update({}, function(successResult){
                }, function(errorResult){
                task.completed = !task.completed;
                genericResourceErrorCallback(errorResult);
            });
        };

        angular.forEach(this.todoLists, function(todoList, key) {
            this.resetNewTask(todoList);
        }, this);
    }]);
})();