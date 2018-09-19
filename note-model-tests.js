function allTests() {

 function noteTest() {
    let note = new Note('My favourite language is JavaScript');
    assert.isEqual(note.getText(), 'My favourite language is JavaScript');
}
noteTest();

assert.showLog()

}
