import express from 'express';
import { authMiddleware,isAdmin } from '../middlewares/authMiddleware.js';
const router = express.Router()

import {
    createProduct,
    getSingleProduct,
    getAllProduct,
    deleteProduct,
 
} from '../controller/productCtrl.js'




router.post('/', authMiddleware, createProduct)
router.get('/', getAllProduct)
router.get('/:id', getSingleProduct)
router.delete('/:id',authMiddleware,isAdmin, deleteProduct)







export default router