var Note = require('./note.js')

var Storage = function() {
  this.set('_canvas', '@@Base@@');
};

Storage.prototype.add = function(noteName) {
  this[noteName] = new Note();
};

Storage.prototype.list = function() {
  var listOfNotes = Object.keys(this);
  return listOfNotes;
};

Storage.prototype.set = function(noteName, textToInsert) {
  this.add(noteName);
  this.insert(noteName, textToInsert);
};

Storage.prototype.insert = function(noteName, textToInsert) {
  var arrayOfNotes = this[noteName].insert(textToInsert);
  var self = this;
  if(arrayOfNotes) {
    arrayOfNotes.forEach(function(item) {
      self.add(item);
    });
  }
};

Storage.prototype.build = function(noteName) {
  var note = this[noteName];
  var tags = note.parse();
};

Storage.prototype.concat = function(noteName) {
  var self = this,
      note = this[noteName],
      notes = note.listInc(),
      complit = note.showText();
  notes.forEach(function(note) {
    var regEx = new RegExp("@@"+ note +"@@", 'g');
    var partToPass = self.concat(note);
    complit = complit.replace(regEx, partToPass);
  });
  var complitInTags = "<span id='"+ noteName +"' class='piece'>" + complit + "<\/span>";
  return complitInTags;
};

Storage.prototype.complit = function() {
  return this.concat('_canvas');
};

module.exports = Storage;