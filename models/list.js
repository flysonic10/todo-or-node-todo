var fs = require('fs');

/**
 * A list containing todo items
 * @param {String} name  The name of the list
 * @param {Array} todos  An array of todo names
 */
var List = function(id, name, todos) {
  this.id = '';
  this.name = name;
  this.todos = [];
};

List.prototype = (function () {
  return {
    create: function (name, todos) {
      this.id = this.generateID();
      this.name = name;
      this.todos = todos || [];
      this.save();
    },

    read: function (id, callback) {
      listID = id || this.id;
      fs.readFile(__dirname+'/../data/lists/' + listID + '.json', function (err, data) {
        if(err) throw err;
        callback(null, JSON.parse(data));
      });
    },

    save: function () {
      fs.writeFile(__dirname+'/../data/lists/' + this.id + '.json', JSON.stringify(this), function (err) {
        if (err) { throw err; }
      });
    },

    generateID: function () {
        return '1';
    }
  };
})();

module.exports = new List();
