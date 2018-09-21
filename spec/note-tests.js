function noteTests() {

  let note = new Note('My favourite language is JavaScript');

  (function(testName) {
    assert.isEqual(note.getText(), 'My favourite language is JavaScript', testName);
  })('note test');

};

function listTests() {

  let note = new Note('My favourite language is JavaScript');
  let list = new List();

  (function(testName) {
    list.store(note);
    assert.isIncluded(list.all(), note, testName);
  })('list test');

  (function(testName) {
    newNote = list.create('text');
    assert.isIncluded(list.all(), newNote, testName);
  })('create note in list test');

};

function listViewTests() {

  (function(testName) {
    let list = new List();
    let listView = new ListView(list);
    let htmlString =  '<ul><li>first note</li><li>second note</li></ul>';
    list.create('first note');
    list.create('second note');

    assert.isEqual(listView.htmlList(), htmlString, testName)
  })('creates view for list');

  (function(testName) {
    var list = new List();
    var listViewTwo = new ListView(list);
    list.create('abcdefghijklmnopqrstuvwxyz')
    var shortenedString = '<ul><li>abcdefghijklmnopqrst</li></ul>'

    assert.isEqual(listViewTwo.htmlList(), shortenedString, testName)
  })('shows 20 char preview of note')
};

function controllerTests() {

  function ListViewDouble() {};
  ListViewDouble.prototype = {
    htmlList: function() {
      return ['test']
    }
  }
  var listViewDouble = new ListViewDouble();

  function DocumentDouble() {};
  DocumentDouble.prototype = {
    innerHTML: function() {
      return ['test']
    }
  }

  var listViewDouble = new ListViewDouble();
  var documentDouble = new DocumentDouble();

  let controller = new NoteController(ListViewDouble);

  (function(testName) {
    assert.isEqual(controller.createView(listViewDouble, documentDouble))
  })('note controller creates view');

}

function singleViewTests() {
  var note = new Note('abc');
  var singleNoteView = new SingleNoteView(note);

  (function(testName) {
    assert.isTruthy(singleNoteView.showNote(), 'abc', testName)
  })('instantiates with note param');

  (function(testName) {
    assert.isEqual(singleNoteView.returnHTML(), '<div>abc</div>', testName)
  })('returns HTML of single note');
}

noteTests();
listTests();
listViewTests();
controllerTests();
singleViewTests();

assert.showLog();
