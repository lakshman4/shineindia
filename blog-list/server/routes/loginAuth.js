 const express = require("express");
 const router = express.Router();
 const nodemailer = require('nodemailer')
 var bodyParser  = require('body-parser');
 const jwt = require("jsonwebtoken");
 const Users= require('../models/auth');
 const app = express();
 var bcrypt = require('bcryptjs');
 const loginValidation = require('../validations/validation')

 app.use(bodyParser.json());

        router.post('/add',async(req,res)=>{
            //passwords
            const salt = await bcrypt.genSalt(5);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
            const user= new Users({
                name:req.body.name,
                email:req.body.email,
                mobile:req.body.mobile,
                password:hashedPassword
            });
            const transporter= nodemailer.createTransport({
                host: 'smtp.gmail.com',
                  port: 587,
                  secure: false,
                  requireTLS: true,
                auth:{
                  user:"lakshmaiahperuri494@gmail.com",
                  pass:"peruri@494"
                }
              });
            const mailOptions={
                from:'lakshmaiahperuri494@gmail.com',
                to:user.email,
                subject:'Hello'+''+user.name+ 'Welcome to Vue Posts Application',
                text:'You are now able to add your posts in the web page...'
              }
              transporter.sendMail(mailOptions,function(error,info){
                if (error){
                  console.log(error);
                }else{
                  console.log('Email sent successfully:'+ info.responce)
                }
              })
            const emailExist = await Users.findOne({ email: req.body.email });
        if (emailExist) return res.status(400).send("Email already exists");
            try{
                const newUser= await user.save();
                console.log(newUser);
                res.json(user)
            }
            catch(err){
                res.status(404).json({message: err.message});
            }
        });
        router.post('/login',async(req,res)=>{
            
        // Users.findOne(function( err,userInfo){
        //     if (err) {
        //     console.log('user email is incorrect');
        //     } else {
        // console.log('valid email address');
        // if(req.body.email==userInfo.email && req.body.password==userInfo.password) {
        // const token = jwt.sign({ _id: userInfo._id }, 'LAkshmaiahaahahahhaan');
        // res.json(userInfo._id)
        // res.json({status:"success", message: "user found!!!"});
        // }else{
        // res.json({status:"error", message: "Invalid email/password!!!"});
        // }
        //     }
        // });
            const user= await Users.findOne({email:req.body.email});
            if(!user){
                return res.status(400).send("email is wrong");
            }
            const validPassword= await bcrypt.compare(req.body.password,user.password);
            if(!validPassword){
                return res.status(400).send("password is wrong");
            }else{
              res.send('Login Success');
            }
            
        });

        module.exports=router;

