var fs = require('fs');
var uuid = require('node-uuid');
var List = require('./list');

/**
 * A todo
 * @param {String} name  The name of the todo
 */
var Todo = function(id, name, listID) {
  this.id = id || '';
  this.name = name || '';
  this.listID = listID || '';
};

Todo.prototype = (function () {
  return {
    create: function (name, listID, callback) {
      this.id = uuid.v4();
      this.name = name;
      this.listID = listID;
      this.save(function (err, data) {
        if (err) { callback(err); return; }
        callback(null, data);
      });
    },

    read: function (id, callback) {
      todoID = id || this.id;
      fs.readFile(__dirname+'/../data/todos/' + todoID + '.json', function (err, data) {
        if (err) { callback(err); return; }
        callback(null, JSON.parse(data));
      });
    },

    save: function (callback) {
      var todoID = this.id;
      var listID = this.listID;
      fs.writeFile(__dirname+'/../data/todos/' + this.id + '.json', JSON.stringify(this), function (err) {
        if (err) { callback(err); return; }
        List.read(listID, function(err, list){
          if (err) { callback(err); return; }
          list.todos.push(todoID);
          list.update({todos: list.todos}, function (err, data) {
            if (err) { callback(err); return; }
            callback(null, todoID);
          });
        });
      });
    }
  };
})();

module.exports = new Todo();
