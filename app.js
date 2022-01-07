const express = require('express');
const app = express();
const path = require('path');
app.use(express.json())
const port=process.env.PORT || 3000;
app.listen(port,()=>console.log("server satrted"))

const userModel=require('./models/userModel')

const userRouter=require('./routers/userRouter')
const cookieParser = require('cookie-parser')


app.use(cookieParser())
app.use(express.static(path.join(__dirname,'views')))

app.use(express.urlencoded({extended :false}));
app.set('view engine','ejs')

app.use("/",userRouter);


/// models
// loader