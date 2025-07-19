const express = require('express');
const mongoose = require('mongoose');
const List = require('./model/List.js');
const cors = require('cors');
require('dotenv').config()
const app = express()
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'], // Add your React app's URL
  credentials: true
}));
const port = 3000
const conn = async ()=>{await mongoose.connect("mongodb://localhost:27017/list")}
conn()

app.post('/',async (req, res) => {
  await List.create({id:req.body.id,name:req.body.name,url:req.body.url,password:req.body.password})
 
  res.json('item save')
})
app.delete('/',async(req,res)=>{
  await List.deleteOne({id:req.body.id})
  res.json('item deleted')
})

app.get('/',async(req,res)=>{
  let data = await List.find()
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})