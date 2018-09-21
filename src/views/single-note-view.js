(function (exports) {
  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype.showNote = function () {
    return this.note
  };

  SingleNoteView.prototype.returnHTML = function () {
    return '<div>' + this.note.getText() + '</div>'
  }
  exports.SingleNoteView = SingleNoteView
})(this)
