const Sequelize = require('sequelize')
const connection = require('../database/connection')

const User = connection.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.DECIMAL
  },
  email: {
    type: Sequelize.STRING
  },
  truck: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  uf: {
    type: Sequelize.STRING
  },
  water: {
    type: Sequelize.FLOAT
  },
  sleep: {
    type: Sequelize.FLOAT
  },
  latitude: {
    type: Sequelize.DECIMAL
  },
  longitude: {
    type: Sequelize.DECIMAL
  }

})

User.sync({ force:true }).then( () => {} )

module.exports = User
