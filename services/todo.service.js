app.factory('todoService', [function() {
  return {
    getList: function () {
      try {
        var data = JSON.parse(localStorage.getItem('todoList'));  // deserialization
        return {
          success: true,
          data: data
        }
      }
      catch (ex) {
        return {
          success: false
        }
      }
    },

    saveList: function(list) {
      
      try {
        localStorage.setItem('todoList', JSON.stringify(list));   // serialization
        return {
          success: true,
        }
      }
      catch (ex) {
        return {
          success: false
        }
      }      
      return;
    }
  }
  }]);