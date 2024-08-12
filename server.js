
const express = require('express')
const app = express()
const db =require('./db')

const Person = require('./models/person');

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


app.get('/person/:workType',(req,res)=>{
  const workType = req.params.workType;
  
})
app.listen(3000,()=>{
  console.log('Listening on port 3000');
})