function noteTests() {
  
  note = new Note('My favourite language is JavaScript');

  (function(testName) {
    assert.isEqual(note.getText(), 'My favourite language is JavaScript', testName);
  })('note test');

};

function listTests() {

  note = new Note('My favourite language is JavaScript');
  list = new List();

  (function(testName) {
    list.store(note);
    assert.isIncluded(list.all(), note, testName);
  })('list test');

};

noteTests();
listTests();

assert.showLog();
