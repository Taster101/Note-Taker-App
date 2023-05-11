const express = require('express');
const path = require('path');
const api = require('./routes/index.js')



const app = express();


app.use(express.json());
app.use(express.static('public'));

app.get('/', (req,res)=> {


})

app.post('/', (req,res)=> {

})


app.delete('/', (req,res)=> {

})