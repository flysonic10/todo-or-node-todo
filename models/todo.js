var fs = require('fs');
var uuid = require('node-uuid');

/**
 * A todo
 * @param {String} name  The name of the todo
 */
var Todo = function(id, name, todos) {
  this.id = '';
  this.name = name;
};

Todo.prototype = (function () {
  return {
    create: function (name, callback) {
      this.id = uuid.v4();
      this.name = name;
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
      fs.writeFile(__dirname+'/../data/todos/' + this.id + '.json', JSON.stringify(this), function (err) {
        if (err) { callback(err); return; }
        callback(null, todoID);
      });
    }
  };
})();

module.exports = new Todo();
