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

function viewTests() {
  
  let list = new List();
  list.create('first note');
  list.create('second note');
  let listView = new ListView(list);
  let htmlString =  '<ul><li>first note</li><li>second note</li></ul>';
  
  (function(testName) {
    assert.isEqual(listView.htmlList, htmlString, testName)
  })('creates view for list');

};

noteTests();
listTests();
viewTests();

assert.showLog();
