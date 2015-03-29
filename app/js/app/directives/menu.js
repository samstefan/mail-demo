module.exports = function(app) {

  /*
   * Menu directives
   */

  /*
   * Menu open
   */

  app.directive('menuOpen', [function() {
    return function($scope, element, attrs) {
      element.bind('click', function(event) {
        event.preventDefault()
        $scope.menuOpen = !$scope.menuOpen
        $scope.$emit('menuUpdate')
        $scope.$apply()
      })
    }
  }])

  /*
   * Menu link
   */

  app.directive('menuLink', ['$rootScope', function($rootScope) {
    return function($scope, element, attrs) {
      element.bind('click', function(event) {
        $rootScope.$broadcast('menuUpdate')
      })
    }
  }])

}