module.exports = function(app) {

  /*
   * Menu controller
   */

  app.controller('menuCtrl', function($scope, $rootScope) {
    $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams) {
      $scope.$route = toState.name
    })
  })
}