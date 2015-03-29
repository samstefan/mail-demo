module.exports = function(app) {
  require('./controllers/menu')(app)
  require('./controllers/meta')(app)
  require('./controllers/view')(app)
  require('./controllers/page')(app)
}