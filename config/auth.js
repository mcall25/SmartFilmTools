// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {





config: {
  port: 80,
  connectionString:'postgres://wyhmdalg:jMJsCkQCmkMdqMAsbrag781oRppVI5fl@elmer.db.elephantsql.com:5432/wyhmdalg',
  secret: "cat"
},

    'googleAuth' : {
        'clientID'      : '139619800406-dlhsafsi8nvsp09kirso7aca5eb5ld7k.apps.googleusercontent.com',
        'clientSecret'  : 'xhUe0eX4iRfDv6YXRvoEHTig',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
