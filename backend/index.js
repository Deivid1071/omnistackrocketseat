const express = require('express');

const app = express();

app.get('/index',(req,res)=>{
  return res.json( {message :"Ola mundo estou funcionando"});
})

app.listen(3333);