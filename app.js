const express = require('express');
const app = express();
const path=require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/database');
const product = require('./model/admin');
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const adminRoutes = require('./routes/admin');

app.use(adminRoutes);

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})
sequelize.sync()
.then(()=>{
    console.log('data sync successfully');
    app.listen(5500);
}).catch(err=>{
    console.log(err);
})