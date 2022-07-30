const body_parser = require('body-parser')
const cors = require('cors')

module.exports = app => {
  app.use(body_parser.json())
  app.use(cors({
    origin: '*'
  }))
}