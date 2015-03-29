/*
 * Module dependencies
 */

module.exports = function(app) {

  app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/inbox')

    $stateProvider
      .state('inbox', {
        url: '/inbox',
        templateUrl: 'page.html',
        controller: 'viewCtrl'
      })

      .state('drafts', {
        url: '/drafts',
        templateUrl: 'page.html',
        controller: 'viewCtrl'
      })

      .state('sent', {
        url: '/sent',
        templateUrl: 'page.html',
        controller: 'viewCtrl'
      })

      .state('spam', {
        url: '/spam',
        templateUrl: 'page.html',
        controller: 'viewCtrl'
      })

  })

}