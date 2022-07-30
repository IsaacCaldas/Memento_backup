const app = require('express')()
const PORT = 3000
const db = require('./config/database')
const consign = require('consign')

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)

app.db = db 

app.get('/', (req, res) => {
  res.status(200).send(`Server is running on port: ${PORT}`)
})

app.listen(3000, () => {
  console.log(`Server is running on port: ${PORT}`)
})