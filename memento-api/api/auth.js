const { auth_secret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

  const signin = async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send('Missing data')
    }

    const user = await app.db('users')
      .whereRaw("LOWER(email) = LOWER(?)", req.body.email).first()

    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, is_match) => {
        if (err || !is_match) {
          return res.status(401).send()
        }

        const payload = { id: user.id }
        res.json({
          name: user.name,
          email: user.email,
          token: jwt.encode(payload, auth_secret)
        })
      })
    } else {
      res.status(400).send('User not found.')
    }
  }

  return { signin }
}

