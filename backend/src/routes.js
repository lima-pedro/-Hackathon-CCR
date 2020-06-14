const express = require('express')

const EventsController = require('./controllers/EventsController')
const UserController = require('./controllers/UserController')

const routes = express.Router()

routes.get('/events', EventsController.index)
routes.get('/events/:id', EventsController.show)
routes.post('/events', EventsController.create)
routes.put('/events/:id', EventsController.update)
routes.delete('/events/:id', EventsController.delete)

routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

module.exports = routes