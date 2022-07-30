const { auth_secret } = require('../.env')
const passport = require('passport')
const passport_jwt = require('passport-jwt')
const res = require('express/lib/response')
const { Strategy, ExtractJwt } = passport_jwt

module.exports = app => {
  const params = {
    secretOrKey: auth_secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  }

  const strategy = new Strategy(params, (payload, done) => {
    app.db('users').where({ id: payload.id }).first()
      .then(user => {
        if (user) {
          done(null, { id: user.id, email: user.email })
        } else {
          done(null, false)
        }
      }).catch(error => done(error, false))
  }) 

  passport.use(strategy)

  return {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate('jwt', { session: false })
  }
}