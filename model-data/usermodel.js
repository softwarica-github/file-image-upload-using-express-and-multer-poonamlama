// var mysequelize = require('../config/database/connection')
// var user =mysequelize.sequelize.define('user',{
//     id:{
//         type:mysequelize.Sequelize.BIGINT(10),
//         primaryKey:true,
//         allowNull:false
//     },
//     firstName:{
//         type:mysequelize.Sequelize.STRING,
//         allowNull:false
//     },
//     freezeTableName:true,
//     tableName : 'my_users'
// })


// user.sync({ force:true})
// .then(()=>{
//     console.log('table created')
//     return user.create({
//         firstName:'leon'
//     })
// })
// .catch((err)=>{

// })

// module.exports = {
//     user
//   }

