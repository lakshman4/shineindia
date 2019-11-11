const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Posts =require('../models/posts');
var multer  = require('multer')
const verifyToken= require('../routes/verifyToken');
const loginUser = require('../routes/loginAuth');

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })

router.get('/',(req,res)=>{
    res.send('Lakshmaiah');
})
router.get('/hello',(req,res)=>{
    res.send('asdfg')
})
router.post('/upload',upload.single('file'),async(req,res)=>{
  const usedPosts= new Posts({
     title:req.body.title,
       content:req.body.content,
     author:req.body.author,
    
    });
    const file=new Posts({
     file: req.file,
    })
  if(file){
    res.send(file);
  }
  else{
    res.status(404).json({message: err.message});
  }
  try{
    // posts.insert({
    //   "title":title,
    //   "content":content,
    //   "author":author,
    //   "mainimage":mainimage,
      
    // })
    const response= await usedPosts.save();
        console.log(usedPosts);
        res.json(usedPosts);
  }
  catch(err){
    res.status(404).json({message: err.message});
  }
});
// router.post('/create', upload.single('file'),  async(req,res)=>{
//   const file=new Posts({
//    file: req.file
//   });
//   const usedPosts= new Posts({
//   title:req.body.title,
//   content:req.body.content,
//   author:req.body.author,
  

//   });
//   if(!file){
//     console.log('no file')
//   }else{
// res.send(file)
//   }
//   console.log(usedPosts);
//   try{
//     const response= await usedPosts.save();
//     console.log(usedPosts);
//      res.json(usedPosts);
//   }
//   catch (err){
  
//   res.status(404).json({message: err.message});
//   }
  
// });
// router.post('/upload', upload.single('file'), (req, res, next) => {
//   const file = req.file
//   if (!file) {
//     const error = new Error('Please upload a file')
//     error.httpStatusCode = 400
//     return next(error)
//   }
//     res.send(req.file.filename)
  
// })
//list the all the posts
router.get('/lists', async(req,res)=>{
  try{
  const list= await Posts.find();
 return res.json(list);
 res.json(list)
  }
  catch(err){
    res.status(500).json({message:err.message});
  }
});
router.delete('/delete/:id',getPost,async(req,res)=>{
  
  try{
      await res.post.remove();
      res.send({ message: " Post Deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
  }
  });
async function getPost(req, res, next) {
    let post;
    try {
     post= await Posts.findById(req.params.id);
      if (post == null) {
        return res.status(404).send({ message: "Cannot find Post" }); 
        
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.post = post;
    next();
  }

module.exports=router;                 