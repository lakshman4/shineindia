const express = require("express");    
const router = express.Router();
const crypto = require('crypto');
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const Purchase =require('../models/purchaseProd');
const Comments = require('../models/comments');
var multer  = require('multer');
const verifyToken= require('../routes/verifyToken');
const loginUser = require('../routes/loginAuth');
const xlsxtojson= require('xlsx-to-json');
const xlstojson= require('xls-to-json');
const Products = require('../models/productDetails');
    
      //product adding
      router.post('/productAdd',async(req,res)=>{
        console.log("eddd");
        const usedProducts= new Products({
            name: req.body.name,
            price:req.body.price, 
            model:req.body.model 
        })
        try{
            const response= await usedProducts.save();
            // res.json(usedProducts);
            // console.log(response);
            const productList= await Products.find();
            res.status(200).json(productList.length);

        }
        catch(e){
          res.status(500).json({message:e.message})
        }
        });
        //count of all
router.get('/productCount',async(req,res)=>{
  try{
    const productList= await Products.find();

    res.status(200).json(productList.length);
  }
  catch(e){
    res.status(500).json({message:err.message});
  }
})
//
router.get('/purchaseCount',async(req,res)=>{
  try{
    const purchasedList= await Purchase.find();

    res.status(200).json(purchasedList.length);
  }
  catch(e){
    res.status(500).json({message:err.message});
  }
})

 // Product lists 

 router.get('/productList', async(req,res) =>{
   try{     
    const productList= await Products.find();
    res.status(200).json(productList);
    console.log(productList);
   }
   catch(e){
     res.status(500).json({message:err.message});
   }
   });
//Purchase products
router.post('/purchase',async(req,res)=>{
  const usedProducts= new Purchase ({
     name:req.body.name,
     price:req.body.price,
     model:req.body.model,
     quantity:req.body.quantity,
     deliveryLocation:req.body.deliveryLocation,
     owner:req.body.owner,
    
    });
  try{
        const response= await usedProducts.save();
        console.log(usedProducts);
        res.json(usedProducts);
  }
  catch(e){
    res.status(404).json({message: e.message});
  }
});
//getting all the purchased products
router.get('/purchasedProducts',async(req,res)=>{
  try{
    const purchasedList= await Purchase.find();
    res.status(200).json(purchasedList);
  }
  catch(e){
    res.status(404).json({message:err.message})

  }
})
//search by name in the product list
router.get('/productList/:search', function(req, res, next) {
  var search = req.params.search;
  Products.find({name: search}, function (err, products) {
      if(err) {
      res.json(err);
      }
      else{
      res.json(products);
      }
  });
});
//update a product
router.put('/edit/:id',updateProduct,async(res,req)=>{
  
})
async function updateProduct(req,res,next){
  let newProduct;
  try{
    newProduct= await Products.findByIdAndUpdate(req.params.id,req.body,{new:true})
  if (newProduct == null) {
    return res.status(404).send({ message: "Cannot find Product" }); 
    
  }
} 
catch (err) {
  return res.status(500).json({ message: err.message });
}
res.newProduct = newProduct;
console.log("newwwwwwww",newProduct);
}
//Get a single product
router.get('/single/:id',async(req,res)=>{
  try{
     let single = await Products.findById(req.params.id)
     return res.json(single)
  }
  catch(err){
    return res.status(500).json({ message: err.message });
  }
});

//delete a product 
router.delete('/delete/:id',getProduct,async(req,res)=>{
  
  try{
      await res.product.remove();
      res.send({ message: " Post Deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
  }
  });
  async function getProduct(req, res, next) {
    let product;
    try {
     product= await Products.findById(req.params.id);
      if (product == null) {
        return res.status(404).send({ message: "Cannot find Product" }); 
        
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.product = product;
    next();
  };
  //Verify token function
//   async function verifyToken(req,res,next){
//   const token = req.header("auth-token");
//   if (!token) return res.status(401).send("Access Denied");
//   try {
//     const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//     req.user = verified;
//     next();
//   } catch (err) {
//     res.status(400).send("Invalid Token");
//   }
// };

module.exports=router;                 