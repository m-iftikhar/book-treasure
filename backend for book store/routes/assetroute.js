import express from 'express';
const router = express.Router()

import {
    uploadImgs,

} from '../controller/assetCtrl.js'
import {uploadPhoto, productImgResize} from '../middlewares/uploadImgs.js';



router.post('/upload-imgs', uploadPhoto.array('images',10),productImgResize, uploadImgs)




export default router