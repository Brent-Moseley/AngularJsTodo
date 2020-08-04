app.directive('myTodo', function(){
    return {
      restrict: 'EA',
      templateUrl: '/directives/partials/todo.html',
      scope: {
        list: '=',
        title: '@'
      }
    };
  });
  // https://adrianmejia.com/creating-custom-angularjs-directives-for-beginners/
  // https://docs.angularjs.org/guide/directive 
  // https://developer.okta.com/blog/2018/10/30/basic-crud-angular-and-node
  // https://docs.angularjs.org/tutorial