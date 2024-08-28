
const express = require('express')
const app = express()
const db =require('./db')
require('dotenv').config();

const MenuItem = require('./models/MenuItem');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Middleware
const logrequest = (req,res,next) => {
  console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
  next();
}

app.use(logrequest);


app.get('/', function (req, res) {
  res.send('Welcome to my hotel .How can i help you..')
})




const personRoutes = require('./routes/personRoutes.js');
const MenuItemRoutes = require('./routes/menuItemRoutes.js');
//C:\Development\Hw_nodejs\Hw_nodejs\routes\menuItemRoutes.js

app.use('/person',personRoutes);
app.use('/menu',MenuItemRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log('Listening on port',+PORT);
})