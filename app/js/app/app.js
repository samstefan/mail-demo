var modules =
  [ 'ngAnimate'
  , 'ngSanitize'
  , 'ngCookies'
  , 'ui.select2'
  , 'ui.router'
  ]
  , app = angular.module('MailBox', modules)

app.run(['$rootScope', '$location', function ($rootScope, $location, user) {
  $rootScope.$on('$routeChangeStart', function (event, next) {
    // Start loading bar
    NProgress.start()
  })

}])

require('./routes.js')(app)
require('./controllers.js')(app)
require('./services.js')(app)
require('./directives.js')(app)
