const dataAccess    = require('../data-access');

function authenticate(username, password, done) {

    dataAccess.user.getUser(username)    
    // db.user.findOne({ username: username }, function (err, user) {
    //     if (err) { return done(err); }
    //     if (!user) {
    //       return done(null, false, { message: 'Incorrect username.' });
    //     }
    //     if (!user.validPassword(password)) {
    //       return done(null, false, { message: 'Incorrect password.' });
    //     }
    //     return done(null, user);
    //   });
}

module.exports ={
    authenticate
};