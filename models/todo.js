var fs = require('fs');
var uuid = require('node-uuid');
var List = require('./list');

var async = require('async');

/**
 * A todo
 * @param {String} name  The name of the todo
 */
var Todo = function(id, name, checked, listID) {
  this.id = id || '';
  this.name = name || '';
  this.checked = checked || false;
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
        var todo = JSON.parse(data);
        todo = new Todo(todo.id, todo.name, todo.checked == 'true', todo.listID);
        callback(null, todo);
      });
    },

    update: function (args, callback) {
      this.name = args.name || this.name;
      this.checked = args.checked || this.checked;
      this.save(function (err, data) {
        if (err) { callback(err); return; }
        callback(null, data);
      });
    },

    delete: function (id, callback) {
      todoID = id || this.id;
      this.read(todoID, function (err, data) {
        if (err) { callback(err); return; }

        fs.unlinkSync(__dirname+'/../data/todos/'+todoID+'.json');

        var parentList;
        async.series([
          function(callback){
            List.read(this.listID, function (err, list) {
              if (err) { callback(err); return; }
              list.todos = list.todos.filter(function (todo) {
                if(todo != this.todoID){ return todo; }
              });
              parentList = list;
              callback(null, list);
            });},
          function(callback){
            List.update(parentList, function (err, data) {
              if (err) { callback(err); return; }
              callback(null, data);
            });}],
          function (err, data) {
            callback(null, data);
          });
      });
    },

    save: function (callback) {
      var todoID = this.id;
      var listID = this.listID;
      fs.writeFile(__dirname+'/../data/todos/' + this.id + '.json', JSON.stringify(this), function (err) {
        if (err) { callback(err); return; }
        List.read(listID, function(err, list){
          if (err) { callback(err); return; }
          // Add todo to the list if it doesn't already exists
          if(!list.todos.some(function (el) { return el === todoID; })){
            list.todos.push(todoID);
          }
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
