app.directive('myTodo', function(){
    return {
      restrict: 'EA',
      templateUrl: '/directives/partials/todo.html',
      scope: {
        list: '=',
        title: '@',
        priorityNames: '='
      },
      
      link: function(scope, elem, attrs) {
        scope.updateCompleted = function(todo){ 
          if(todo.name.charAt(0) =='M'){
            todo.color = "magenta";
          }
          else if (todo.completed ==true){
            todo.color = 'green';
          }
          else todo.color = 'orange';
        };

        scope.updatePriorities = function() {
          scope.countHigh = 0;
          scope.countMedium = 0;
          scope.countLow = 0;
          angular.forEach(scope.list, function(todo) {
            if (todo.priority == scope.priorityNames[0]) scope.countHigh++;
            if (todo.priority == scope.priorityNames[1]) scope.countMedium++;
            if (todo.priority == scope.priorityNames[2]) scope.countLow++;
          })
        }
      }
    };
  });
  // https://adrianmejia.com/creating-custom-angularjs-directives-for-beginners/
  // https://docs.angularjs.org/guide/directive 
  // https://developer.okta.com/blog/2018/10/30/basic-crud-angular-and-node
  // https://docs.angularjs.org/tutorial