import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define asset schema
const AssetSchema = new Schema({
  // Fields for images and videos
  images: [],
}, { timestamps: true });

// Create and export model
const ImageAsset = mongoose.model('ImageAsset', AssetSchema);
export default ImageAsset;
