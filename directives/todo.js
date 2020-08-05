app.directive('myTodo', function(){
    return {
      restrict: 'EA',
      templateUrl: '/directives/partials/todo.html',
      scope: {
        list: '=',
        title: '@'
      },
      
      link: function(scope) {
        scope.updateCompleted = function(todo){ 
          if(todo.name.charAt(0) =='M'){
            todo.color = "magenta";
          }
          else if (todo.completed ==true){
            todo.color = 'green';
          }
          else todo.color = 'orange';
        }
      }
    };
  });
  // https://adrianmejia.com/creating-custom-angularjs-directives-for-beginners/
  // https://docs.angularjs.org/guide/directive 
  // https://developer.okta.com/blog/2018/10/30/basic-crud-angular-and-node
  // https://docs.angularjs.org/tutorial