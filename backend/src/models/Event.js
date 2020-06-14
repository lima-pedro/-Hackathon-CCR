const Sequelize = require('sequelize')
const connection = require('../database/connection')

const Event = connection.define('events', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  locale: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  latitude: {
    type: Sequelize.FLOAT
  },
  longitude: {
    type: Sequelize.FLOAT
  },
  image: {
    type: Sequelize.STRING 
  }
})

// Event.sync({ force:true }).then( () =>  {})

module.exports = Event
