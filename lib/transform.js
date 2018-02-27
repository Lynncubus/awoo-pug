const pug = require('pug')

function transform(file, options = {}, files) {
  const compiled = pug.compile(file.contents, {
    filename: file.path
  })

  const newFile = Object.assign(file, {
    path: file.path.replace(/\.[^]+$/i, '.html'),
    contents: compiled(Object.assign({}, options.globals, file.metadata, file.data))
  })

  return newFile
}

module.exports = transform