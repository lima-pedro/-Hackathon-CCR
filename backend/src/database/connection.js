const Sequelize = require('sequelize')

const connection = new Sequelize('hackaton_ccr', 'root', 'So101190', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-03:00'
})

connection
  .authenticate()
  .then( () => {
    console.log('Connection has been established successfully')
  })
  .catch( err => {
    console.log('Unable to connect to the database', err)
  })

module.exports = connection