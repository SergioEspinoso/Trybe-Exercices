const toUpperCase = require('./toUpperCase.js');

test('Testing if letters are all in UPPERCASE', done => {
  toUpperCase('sergio', (callback) => {
    expect(callback).toBe('SERGIO');
    done();
  });
});