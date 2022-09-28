const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser = require('body-parser')

const app=express();

//log requests
app.use(morgan("tiny"));

//parse request to body parser

app.get('/',(req,res)=>{
    res.send('crud app')
})


dotenv.config({path:'config.env'});
const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{console.log(`the server is running on http://localhost:${PORT} port`)})