(function(){
    var apiService = angular.module("task-list.api-service", ["ngResource"]);

    apiService.config(function($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    });

    apiService.factory("TodoList", function ($resource) {
        return $resource(
            "http://localhost:8000/todolist/:id/",
            {id: "@id" }
        );
    });

    apiService.factory("TodoListItem", function ($resource) {
        return $resource(
            "http://localhost:8000/todolistitem/:id/",
            {id: "@id" },
            {
                "update": {method: "PUT"}
            }
        );
    });

})();