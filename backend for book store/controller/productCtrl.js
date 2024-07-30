import asyncHandler from "express-async-handler";
import validateMongoId from "../ulits/validateMongodbId.js";
import Product from "../models/productModel.js";
import slugify from "slugify";



// create product 
const createProduct = asyncHandler(async(req,res)=>{
  const { id } = req.user;
  validateMongoId(id);
  console.log("Product created", id )
   try{
    const createProduct = {
      ...req.body,
      userId: id,
    };
    
        if(req.body.title){
            req.body.slug = slugify(req.body.title);
        }
   const createPdt = await Product.create(createProduct)
   res.json(createPdt)
    }catch(err){
        throw new Error(err)
    }
})

// get single product 
const getSingleProduct = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try{
const singleProduct = await Product.findById(id).populate("pictures").populate("userId");
res.json(singleProduct)
    }catch(err){
throw new Error(err)
    }
})


// get all product 
const getAllProduct = asyncHandler(async (req, res) => {
    const queryObj = { ...req.query };
    const excludeField = ["page", "sort", "limit", "fields"];
    excludeField.forEach((element) => delete queryObj[element]);
  
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  
   
    let query = Product.find(JSON.parse(queryStr)).populate("pictures").populate("userId");
  
    // sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }
  
    // limiting the fields
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }
  
    // pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    const productCount = await Product.countDocuments();
    if (skip >= productCount) throw new Error("This page does not exist");
  
    try {
      const allProduct = await query;
      res.json(allProduct);
    } catch (err) {
      throw new Error(err);
    }
  });
  
  

// get update product 
const updateProduct = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try{
        if(req.body.title){
            req.body.slug = slugify(req.body.title);
        }
    const upProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.json(upProduct)
    }catch(err){
        throw new Error(err)
    }
})

// delete product 
const deleteProduct = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    validateMongoId(id)
    try{
    const dltProduct = await Product.findByIdAndDelete(id);
    res.json(dltProduct)
    }catch(err){
        throw new Error(err)
    }
})










export {
    createProduct,
    getSingleProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
   
}