module.exports = function(app) {
  require('./services/title')(app)
  require('./services/mail')(app)
}