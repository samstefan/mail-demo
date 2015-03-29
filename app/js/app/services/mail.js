/*
 * Module dependencies
 */

var data = require('../../data.json')

module.exports = function(app) {

  /*
   * Mail service
   */

  app.factory('mail', function() {
    return {
      inbox: data.inbox,
      drafts: data.drafts,
      sent: data.sent,
      spam: data.spam,

      constructModal: function(emails) {
        emails = angular.copy(emails)

        angular.forEach(emails, function(email, index) {
          var name = email.from || email.to
          emails[index].user =
            { name: name
            , iconClass: firstToLowerCase(name)
            }
        })

        return emails
      }
    }

  })

}

/*
 * Private static methods
 */

function firstToLowerCase(str) {
  return str.substr(0, 1).toLowerCase() + str.substr(1)
}