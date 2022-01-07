const { use } = require('bcrypt/promises');
const express = require('express');
const app = express();
const path = require('path');
const userRouter = express.Router();
app.use(express.json())
const{signup,login,logout,protectRoute,renderIndex,renderUser,forgetpassword,renderFgtPage,renderPassword,resetpassword,urlInfo}=require("../controller/authController")


//render the index.js file or the home file
userRouter
.route('/')
.get(renderIndex)

//render the user  page
userRouter
.route('/user')
.get(renderUser)

//user signup
userRouter
    .route("/signup")
    .post(signup)

// user login
userRouter
    .route("/login")
    .post(login)

userRouter
.route("/fgtPassword")
.get(renderFgtPage)

userRouter
    .route("/forgetpassword")
    .post(forgetpassword)
    



//reset password
userRouter
.route("/resetpassword/:token")
.get(renderPassword)
.post(resetpassword)


userRouter
.route("/logout")
.get(logout)

userRouter
.route("/user/:id")
.get(renderUser)







module.exports=userRouter