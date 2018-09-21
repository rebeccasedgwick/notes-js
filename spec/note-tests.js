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

  let list = new List();
  list.create('first note');
  list.create('second note');
  let listView = new ListView(list);
  let htmlString =  '<ul><li>first note</li><li>second note</li></ul>';

  (function(testName) {
    assert.isEqual(listView.htmlList(), htmlString, testName)
  })('creates view for list');

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

  (function(testName) {
    note = new Note('abc');
    singleNoteView = new SingleNoteView(note);

    assert.isTruthy(singleNoteView.showNote(), 'abc', testName)
  })('instantiates with note param')
}

noteTests();
listTests();
listViewTests();
controllerTests();
singleViewTests();

assert.showLog();
