const pug = require('pug')

function transform(file, options, files) {
  const output = pug.render(file.contents, {
    filename: file.path,
    globals: Object.assign({}, options.globals, file.metadata, file.data)
  })

  const newFile = Object.assign(file, {
    path: file.path.replace(/\.[^]+$/i, '.html'),
    contents: output
  })

  return newFile
}

module.exports = transform