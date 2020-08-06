var app = angular.module('myApp',  []);

app.controller('main', function($scope){
  $scope.todoList = [
    {name: 'Create a custom directive', completed: true, color:'red', priority: ''},
    {name: 'Learn about restrict', completed: true, color:'green', priority: ''},
    {name: 'Master scopes', completed: false, color:'blue', priority: ''},
    {name: 'Inject a Service', completed: false, color:'blue', priority: ''}
  ];
  $scope.priorities = ["high", "medium", "low"];  // defined in order of high, medium, low
});