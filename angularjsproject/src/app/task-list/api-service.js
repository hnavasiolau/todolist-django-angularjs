(function(){
    var apiService = angular.module("task-list.api-service", ["ngResource"]);

    apiService.factory("TodoList", function ($resource) {
        return $resource(
            "http://localhost:8000/todolist/:Id",
            {Id: "@Id" }
        );
    });

    apiService.factory("TodoListItem", function ($resource) {
        return $resource(
            "http://localhost:8000/todolistitem/:Id",
            {Id: "@Id" },
            {
                "update": {method: "PUT"}
            }
        );
    });

})();