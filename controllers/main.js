var app = angular.module('myApp',  []);

app.controller('main', function($scope){
  $scope.todoList = [
    {name: 'Create a custom directive', completed: true, color:'red'},
    {name: 'Learn about restrict', completed: true, color:'green'},
    {name: 'Master scopes', completed: false, color:'blue'},
    {name: 'Inject a Service', completed: false, color:'blue'}
  ];
});