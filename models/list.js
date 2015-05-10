var fs = require('fs');
var uuid = require('node-uuid');

/**
 * A list containing todo items
 * @param {String} name  The name of the list
 * @param {Array} todos  An array of todo names
 */
var List = function(id, name, todos) {
  this.id = id || '';
  this.name = name || '';
  this.todos = todos || [];
};

List.prototype = (function () {
  return {
    create: function (name, todos, callback) {
      this.id = uuid.v4();
      this.name = name;
      this.todos = todos || [];
      this.save(function (err, data) {
        if (err) { callback(err); return; }
        callback(null, data);
      });
    },

    read: function (id, callback) {
      listID = id || this.id;
      fs.readFile(__dirname+'/../data/lists/' + listID + '.json', function (err, data) {
        if (err) { callback(err); return; }
        var list = JSON.parse(data);
        list = new List(list.id, list.name, list.todos);
        callback(null, list);
      });
    },

    update: function (args, callback) {
      this.name = args.name || this.name;
      this.todos = args.todos || this.todos;
      this.save(function (err, data) {
        if (err) { callback(err); return; }
        callback(null, data);
      });
    },

    delete: function (id, callback) {
      listID = id || this.id;
      fs.unlink(__dirname+'/../data/lists/'+listID+'.json', function (err, data) {
        if (err) { callback(err); return; }
        callback(null, data);
      });

    },

    save: function (callback) {
      var listID = this.id;
      fs.writeFile(__dirname+'/../data/lists/' + this.id + '.json', JSON.stringify(this), function (err) {
        if (err) { callback(err); return; }
        callback(null, listID);
      });
    }
  };
})();

module.exports = new List();
