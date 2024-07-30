import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    bookTitle: {
      type: String,
   
    },
    isbn: {
      type: String,
    
    },
    mainAuthor: {
      type: String,
  
    },
    description: {
      type: String
    },
    publishDate: {
      type: Date
    },
    publication: {
      type: String
    },
    condition: {
      type: String,
      enum: ['Like new', 'Good', 'Fair', 'Poor']
    },
    category: {
      type: String,
      enum: ['Primary&Secondary', 'Matric', 'Inter', 'Graduation', 'Mphil', 'Phd']
    },
    pictures: { type: mongoose.Schema.Types.ObjectId, ref: "ImageAsset" },
    sellerComments: {
      type: String
    },
    sellPrice: {
      type: Number,
    },
    referenceCode: {
      type: String,
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
