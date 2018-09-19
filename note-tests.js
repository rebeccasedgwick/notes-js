function noteTests() {

  let note = new Note('My favourite language ain\'t JavaScript');

  (function(testName) {
    assert.isEqual(note.getText(), 'My favourite language ain\'t JavaScript', testName);
  })('note test');

};

function listTests() {

  let note = new Note('My favourite language ain\'t JavaScript');
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

noteTests();
listTests();

assert.showLog();
