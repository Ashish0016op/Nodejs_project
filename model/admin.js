const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const product=sequelize.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    itemName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    Quantity:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports=product;