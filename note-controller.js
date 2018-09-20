(function (exports) {
  function NoteController(noteList = new List()) {
    this.noteList = noteList
  }

  NoteController.prototype.createView = function() {
    var listView = new ListView(this.noteList)
    document.getElementById('app').innerHTML = listView.htmlList()
  }

  exports.NoteController = NoteController
})(this)
