const test = require('ava')
const awoo = require('awoo')
const pug = require('../index')

test('correctly parses', async t => {
  const files = [
    {
      path: 'test.pug',
      contents: 'p Hello world!'
    }
  ]

  const res = await awoo.integration(async site => {
    site.use(pug)

    return site
  }, files)

  t.is(res.files[0].contents, '<p>Hello world!</p>')
  t.is(res.files[0].path, 'test.html')
})

