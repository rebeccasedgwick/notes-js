// assert.isTruthy(undefined);

function allTests() {
  
 function noteTest() {
    let note = new Note('My favourite language is JavaScript');
    assert.isEqual(note.getText(), 'My favourite language is JavaScript');
}
noteTest();


// assert.isEqual(1 + 1, 3);
// assert.isEqual(1 + 1, 2);
// assert.isEqual(1 + 1, 3);
// assert.isEqual(1 + 1, 2);
// assert.isEqual(1 + 1, 5);
// assert.isTruthy('');
// assert.isTruthy('hi');
// assert.isIncluded([1,2,3], 5);
// assert.isIncluded([1,2,3], 2);
// assert.isIncluded('hello', 'el');
// assert.isIncluded('hello', 'zzz');
// assert.isEqual(1 + 1, 5);
assert.showLog()

}
