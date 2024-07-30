import express from 'express';
const router = express.Router()
import { authMiddleware,isAdmin } from '../middlewares/authMiddleware.js';


import {
    sendMail,
} from '../controller/emailCtrl.js'




router.post('/', authMiddleware, sendMail)

export default router