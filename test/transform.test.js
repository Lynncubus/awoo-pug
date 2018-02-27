const test = require('ava')
const awoo = require('awoo')
const transform = require('../lib/transform')

test('Parses pug', async t => {
  const input = {
    path: 'test.pug',
    contents: 'p Hello world!'
  }

  const expected = {
    path: 'test.html',
    contents: '<p>Hello world!</p>'
  }

  t.deepEqual(transform(input), expected)
})