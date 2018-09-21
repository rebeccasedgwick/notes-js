(function (exports) {
  function NoteController(noteList = new List()) {
    this.noteList = noteList
  }
  var listViewParam = new ListView(this.noteList);
  var docParam = document.getElementById('app');

  NoteController.prototype.createView = function(listView = listViewParam, doc = docParam) {
    var listView = listView;
    doc.innerHTML = listView.htmlList()
  }

  exports.NoteController = NoteController
})(this)
