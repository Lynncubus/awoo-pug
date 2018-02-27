function filter (file, options = {}, files) {
  return file.path.endsWith('.pug')
}

module.exports = filter