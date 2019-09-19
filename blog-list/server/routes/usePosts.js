const express = require("express");
const router = express.Router();
const Posts =require('../models/posts');

router.get('/',(req,res)=>{
    res.send('Lakshmaiah');
})
router.get('/hello',(req,res)=>{
    res.send('asdfg')
})
router.post('/create',async(req,res)=>{
  const usedPosts= new Posts({
  title:req.body.title,
  content:req.body.content,
  author:req.body.author
  });
  console.log(usedPosts);
  try{
    const response= await usedPosts.save();
    console.log(usedPosts);
     res.json(usedPosts);
  }
  catch (err){
  res.status(404).json({message: err.message});
  }
  
});
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
        return res.status(404).send({ message: "Cannot find subscriber" }); 
        
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.post = post;
    next();
  }

module.exports=router;                 