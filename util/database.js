const Sequelize=require('sequelize');
const sequelize= new Sequelize('nodejs-db','root','Ashish8298',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;