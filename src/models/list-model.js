(function(exports) {

  function List() {
    this.notes = []
  }

  List.prototype.all = function() {
    return this.notes
  }

  List.prototype.store = function(note) {
    this.notes.push(note)
  }

  List.prototype.create = function(text) {
    note = new Note(text)
    this.store(note)
    return note
  }

  exports.List = List;

})(this)
