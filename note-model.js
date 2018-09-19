(function (exports) {
  function Note(string) {
    this.text = string;
  }
  Note.prototype.getText = function() {
    return this.text
  }
  exports.Note = Note;
})(this)


//  (function (exports) {
//
//     function doSomethingPrivate(var) {
//     }
//
//     function Note(text) {
//     }
//
//     Note.prototype.doSomething = function() {
//         doSomethingPrivate(this.someVariable)
//     }
//
//     exports.Note = Note;
// })(this)
