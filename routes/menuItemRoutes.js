const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem');

router.post('/',async (req,res)=>{
    try{
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log('Data Saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server error'});
    }
})

router.get('/',async (req,res)=>{
    try{
      const data = await MenuItem.find();
      console.log("Data fetched ");
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error : 'Internal server error'});
    }
  })


router.get('/:Quantity',async (req,res)=>{
    try{
      const Quantity = req.params.Quantity;
      if(Quantity == 'Small' || Quantity == 'Medium' || Quantity == 'Large'){
        const response = await MenuItem.find({Quantity:Quantity});
        console.log('response fetched');
        res.status(200).json(response);
      }else{
        res.status(404).json({error : 'Invalid Work Type'});
      }
    }catch(err){
      console.log(err);
      res.status(500).json({error : 'Internal server error'});
    }
})

module.exports = router;