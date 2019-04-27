const Sequelize = require('sequelize')
const sequelize = new Sequelize('user_data','leonul','Apple123/',{
    host:'localhost',
    dialect:'mysql'
  })
  
  sequelize.authenticate()
  .then(()=>{               // for success
    console.log('database connected')
  })
  .catch((err)=>{           // for error
    console.log(err)
  })

  module.exports = {
    sequelize,
    Sequelize
  }