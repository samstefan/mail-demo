module.exports = function(app) {

  /*
   * Email directives
   */

  /*
   * Email open
   * Opens the selected email in the email view
   */

  app.directive('emailOpen', ['$location', function($location) {
    return function($scope, element, attrs) {
      element.bind('click', function(event) {
        event.preventDefault()

        // Remove all other emails from active
        angular.forEach($scope.emails, function(email) {
          email.active = false
        })

        // Set current active email
        $scope.email.active = true
        // Set email in view
        $scope.emailView.data = $scope.email
        $scope.emailView.show = true
        $scope.$apply()
      })
    }
  }])

  /*
   * Email close
   * Closes the email in the email view
   */

  app.directive('emailClose', ['$location', function($location) {
    return function($scope, element, attrs) {
      element.bind('click', function(event) {
        event.preventDefault()

        // Remove all other emails from active
        angular.forEach($scope.emails, function(email) {
          email.active = false
        })

        $scope.emailView.show = false
        $scope.$apply()
      })
    }
  }])

}