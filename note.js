var Note = function(text) {
  this.regEx = /@@[\wа-яА-Я]+@@/g;
  this._includes = [];
  if(text) {
    this._content = text;
    this.updInc(this.parse());
  } else {
    this._content = '__NEW_NOTE__';
  }
};

Note.prototype.parse = function(text) {
  var text = text || this._content;
  var matched = text.match(this.regEx);
  return matched;
};

Note.prototype.listInc = function() {
  return this._includes;
};

Note.prototype.updInc = function(array) {
  if(!array) {
    console.log('Nothing to update.');
    return null;
  }
  var news = [];
  var self = this;
  array.forEach(function(item) {
    var keyWord = item.slice(2, -2);
    if(self._includes.indexOf(keyWord) === -1) {
      self._includes.push(keyWord);
      news.push(keyWord);
    }
  });
  return news.length == 0 ? null : news;
};

Note.prototype.insert = function(input) {
  var text = (input !== '') ? input : '_';
  var tags = this.parse(text);
  this._content = text;
  var news = this.updInc(tags);
  if(news) {
     return news
  }
};

Note.prototype.showText = function() {
  return this._content;
};

module.exports = Note;