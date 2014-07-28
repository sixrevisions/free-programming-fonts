// Unit test for example-code-js.html
// ----------------------------------------------------
var characterlogs = function () {
  var i = 1, l = 1, O = 0, o = 0,
      backtick = '`',
      apostrophe = "'",
      twoapostrophes = "''",
      doublequote = '"';
  // will always evaluate to true
  if(i == l || l == 1) {
    // lowercase i vs. lowercase l vs. one (1) vs. vertical bar (|)
    console.log('Log 1: il1|');
    // uppercase O vs. zero (0) vs. lowercase o
    console.log('Log 2: O0o');
    // backtick (`) vs. apostrophe(')
    console.log('Log 3: ' + backtick + apostrophe);
    // two apostrophes ('') vs. a double-quotation mark (")
    console.log('Log 4: ' + twoapostrophes + doublequote);
  }
};
// ----------------------------------------------------
// characterlogs() should log four lines in browser console
characterlogs();