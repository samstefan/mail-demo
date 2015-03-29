module.exports = function(app) {

  /*
   * View Controller
   */

  app.controller('viewCtrl', function($scope, $state, title, mail) {

    var list = {
      initialize: function() {
        // Set page title
        title.setTitle(firstToUpperCase($state.current.name) + ' | MailBox')
        // Get email data
        $scope.emails = mail.constructModal(mail[$state.current.name])
        // Set page
        $scope.page = firstToUpperCase($state.current.name)
        // Email view
        $scope.emailView = { show: false, data: {} }
      }
    }

    list.initialize()
  })

  /*
   * Private static methods
   */

  function firstToUpperCase(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1)
  }

}
