var app = angular.module('myApp',  []);

app.controller('main', function($scope, $timeout, todoService){
  $scope.todoList = [
    {name: 'Create a custom directive', completed: true, color:'red', priority: ''},
    {name: 'Learn about restrict', completed: true, color:'green', priority: ''},
    {name: 'Master scopes', completed: false, color:'blue', priority: ''},
    {name: 'Inject a Service', completed: false, color:'blue', priority: ''}
  ];
  $scope.priorities = ["high", "medium", "low"];  // defined in order of high, medium, low
  $scope.save = function() {
    var result = todoService.saveList($scope.todoList);
    if (result.success) {
      $scope.saveMessage = "Save succeeded.";
      $timeout(function(){
        $scope.saveMessage = "";
      }, 4000);
    }
    else alert("Error: Save failed!");
  };
  $scope.restore = function() {
    var load = todoService.getList();
    if (load.success) $scope.todoList = load.data;
    else alert("Error: Restore failed!");
  }
});