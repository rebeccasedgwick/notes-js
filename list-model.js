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

  exports.List = List;

})(this)
