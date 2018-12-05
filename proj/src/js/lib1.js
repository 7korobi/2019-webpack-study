
module.exports = function ( process ) {
  var versions = process.versions
  var env = process.env
  return {
    versions: versions,
    env: env,
  }
}
