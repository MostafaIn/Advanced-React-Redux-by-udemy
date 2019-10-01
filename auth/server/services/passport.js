const passport = require('passport');
const user = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup options for JWT Strategy
const JwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(JwtOptions, function (payload, done) {
    //SEE fi the user ID in the payload exists in out database
    // if it does, call 'done' with that other
    // otherwise, call done without a user object

    user.findById(payload.sub, function (err, user) {
        if (err) { return done(err, false); }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    })
})

// Tell passport to use this strategy
passport.use(jwtLogin);

