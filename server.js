
const express = require('express')
const app = express()
const db =require('./db')

const Person = require('./models/person');
const MenuItem = require('./models/MenuItem');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Welcome to my hotel .How can i help you..')
})

app.post('/person',async (req,res)=>{
  try{
    const data = req.body;

    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server error'});
  } 
})

app.get('/person',async (req,res)=>{
  try{
    const data = await Person.find();
    console.log('Data Fetched Successfully');
    res.status(200).json(data);

  }catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal Server error'});
  }
})
app.get('/menu',async (req,res)=>{
  try{
    const data = await MenuItem.find();
    console.log("Data fetched ");
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal server error'});
  }
})


app.get('/person/:workType',async (req,res)=>{
  try{
    const workType = req.params.workType;
    if(workType == 'chef' || workType=='manager' || workType =='waiter'){
      const response = await Person.find({work :workType});
      console.log('response fetched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error : 'Invalid Work Type '});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal server error'});
  }
})

app.listen(3000,()=>{
  console.log('Listening on port 3000');
})