const moment = require('moment')

module.exports = app => {

  const index = (req, res) => {
    const date_period = req.query.date_period ? req.query.date_period : moment().endOf('day').toDate()

    app.db('tasks').where({ user_id: req.user.id })
      .where('estimated_at', '<=', date_period).orderBy('created_at')
      .then(tasks => res.json(tasks))
      .catch(error => res.status(500).json(error))
  }

  const create = (req, res) => {
    if (!req.body.description.trim()) {
      return res.status(400).send('Enter a valid description')
    }

    req.body.user_id = req.user.id

    app.db('tasks').insert(req.body)
      .then(_ => res.status(204).send())
      .catch(error => res.status(400).json(error))
  }

  const remove = (req, res) => {
    app.db('tasks').where({ id: req.params.id, user_id: req.user.id })
      .del()
      .then(rows_deleted => {
        if (rows_deleted > 0) {
          res.status(204).send()
        } else {
          const msg = `Task with id: ${req.params.id} not found`
          res.status(400).send(msg)
        }
      }).catch(error => res.status(500).json(error))
  }

  const updateDoneAt = (req, res, done, updated_at) => {
    app.db('tasks').where({ id: req.params.id, user_id: req.user.id })
      .update({ done, updated_at })
      .then(_ => res.status(204).send())
      .catch(error => res.status(400).json(error))
  }

  const toggleDone = (req, res) => {
    app.db('tasks').where({ id: req.params.id, user_id: req.user.id })
      .first()
      .then(task => {
        if (!task) {
          const msg = `Task with id: ${req.params.id} not found`
          return res.status(400).send(msg)        
        }

        const done = !task.done
        const updated_at = new Date()
        updateDoneAt(req, res, done, updated_at)

      }).catch(error => res.status(500).json(error))
  }

  return { index, create, remove, toggleDone  }
}