module.exports = function(app) {
  require('./directives/menu')(app)
  require('./directives/email')(app)
}