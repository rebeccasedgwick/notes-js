(function (exports) {
  function SingleNoteView(note) {
    this.note = note
  }

  SingleNoteView.prototype.showNote = function () {
    return this.note
  };
  exports.SingleNoteView = SingleNoteView
})(this)
