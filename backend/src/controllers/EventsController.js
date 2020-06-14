const connection = require('../database/connection')

const Event = require('../models/Event')

module.exports = {
  async index (request, response) {
    try {
      const events = await Event.findAll({ raw: true})
      
      return response.status(200).send(events)
    } catch (err) {
      return response.status(400).send({ error: 'Error finding events'})
    }
  },
  
  async show (request, response) {
    const id = Number(request.params.id)

    try {
      const event = await Event.findOne({ where: { id:id } })

      if (!event) {
        return response.status(404).send({ error: 'Event not found' })
      }

      return response.status(200).send(event)
    } catch (err) { 
      return response.status(400).send({ error: 'Error finding event' })
    }
  },

  async create (request, response) {
    const {
      name,
      locale,
      description,
      latitude,
      longitude,
      image
    } = request.body

    try {
      const event = await Event.create({
        name,
        locale,
        description,
        latitude,
        longitude,
        image
      })

      return response.status(201).send(event)
      
    } catch (err) {
      return response.status(400).send({ error: 'Error creating user' })
    }
  },

  async update (request, response) {
    const id = Number(request.params.id)
    const {
      name,
      locale,
      description,
      latitude,
      longitude,
      image
    } = request.body

    try {
      const event = await Event.findOne({ where: {id:id} })

      if ( !event ) {
        return response.status(404).send({ error: 'Event not found' })
      }

      await Event.update({
        name,
        locale,
        description,
        latitude,
        longitude,
        image
      }, {
        where: {id:id}
      })

      return response.status(200).send({ msg: 'Event updated' })

    } catch (err) {
      return response.status(400).send({ error: 'Error editing event' })
    }
  },

  async delete (request, response) {
    const id = Number(request.params.id)

    try {

      const event = await Event.findOne({ where: { id:id } })

      if ( !event ) {
        return response.status(404).send({ error: 'Event not found' })
      }

      await Event.destroy({ where: { id:id } })
 
      return response.status(200).send({ msg: 'Event deleted' })
    } catch (err) {
      return response.status(400).send({ error: 'Error deleting event' })
    }
  }
}
