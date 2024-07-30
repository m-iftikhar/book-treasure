import ImageAsset from "../models/imgModel.js";
import asyncHandler from "express-async-handler";




const uploadImgs = asyncHandler(async (req, res) => {
    try {
      const baseUrl = req.protocol + '://' + req.get('host'); // Get base URL of the server
      const urls = [];
      const files = req.files;
  
      for (const file of files) {
        const { path } = file;
        const relativePath = path.replace(/^.*public/, ''); // Convert absolute path to relative path
        const imageUrl = baseUrl + relativePath; // Concatenate base URL with relative path
        urls.push(imageUrl);
      }
  
      // Store the URLs in the database
      const images = urls.map((item) => item);
      const createImage = await ImageAsset.create({ images });
  
      // Send the response with the created image data
      res.json(createImage);
  
    } catch (err) {
      console.error("Error uploading images:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  

  export {
    uploadImgs,
}