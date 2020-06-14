const connection = require('../database/connection')

const User = require('../models/User')

module.exports = {
  async index (request, response) {
    try {
      const users = await User.findAll({ raw:true })
      
      return response.status(200).send(users)
    } catch (err) {
      return response.status(400).send({ error: 'Error searching users' })
    }
  },
  
  async show (request, response) {
    const id = Number(request.params.id)

    try {
      const user = await User.findOne({ where: { id:id } })
      
      if (!user) {
        return response.status(404).send({ error: 'User not found' })
      }

      return response.status(200).send(user)
    } catch (err) {
      return response.status(400).send({ error: 'Error searching user' })
    }
  },
  
  async create (request, response) {
    const {
      name,
      phone,
      email,
      truck,
      city,
      uf,
      water,
      sleep,
      latitude,
      longitude
    } = request.body

    try {

      // const user = User.findAll({ where: { email:email } }) 
      // if (user) {
      //   return response.status(400).send({ msg: 'User already has registration' })
      // }

      const user = await User.create({
        name,
        phone,
        email,
        truck,
        city,
        uf,
        water,
        sleep,
        latitude,
        longitude
      })

      return response.status(201).send(user)

    } catch (err) {
      return response.status(400).send({ msg: 'Error registering user ' })
    }
  }, 
  
  async update (request, response) {
    const id = Number(request.params.id)
    const {
      name,
      phone,
      email,
      truck,
      city,
      uf,
      water,
      sleep,
      latitude,
      longitude
    } = request.body

    try {

      const user = await User.update({
        name,
        phone,
        email,
        truck,
        city,
        uf,
        water,
        sleep,
        latitude,
        longitude
      }, { where: { id:id }})

      return response.status(201).send({ msg: 'User updated'})

    } catch (err) {
      return response.status(400).send({ error: 'Error editing user ' })
    }
  },
  
  async delete (request, response) {
      const id = Number(request.params.id)

      try {
        const user = await User.findOne({ where: { id:id } })

        if (!user) {
          return response.status(404).send({ error: 'User not found' })
        }

        const deletion = await User.destroy({ where: { id:id } })

        return response.status(200).send({ msg: 'User deleted' })
      } catch (err) {
        return response.status(400).send({ error: 'Error deleting user' })
      }
  }
}


