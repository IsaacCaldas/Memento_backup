module.exports = app => {
  
  // User routes
  app.post('/signup', app.api.users.create)
  app.post('/signin', app.api.auth.signin)

  // Tasks routes
  app.route('/tasks')
    .all(app.config.passport.authenticate())
    .get(app.api.task.index)
    .post(app.api.task.create)

  app.route('/tasks/:id')
    .all(app.config.passport.authenticate())
    .delete(app.api.task.remove)
    
  app.route('/tasks/:id/toggleDoneAt')
    .all(app.config.passport.authenticate())
    .put(app.api.task.toggleDone)

}