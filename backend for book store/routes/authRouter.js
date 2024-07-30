import express from 'express';
import { authMiddleware,isAdmin } from '../middlewares/authMiddleware.js';
const router = express.Router()
import {
    createUser,
    loginUser,
    getAllUser,
    getSingleUser,
    updateUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    handleLogout,
    updatePassword,
    forgetPasswordToken,
    resetPassword,
    addToCart,
    removeFromCart
  
  
} from '../controller/userCtrl.js';


router.post("/signup", createUser)
router.post("/login", loginUser)
router.post("/addToCart", authMiddleware, addToCart)
router.get("/all-users", getAllUser)
router.get("/refresh", handleRefreshToken)
router.get("/logout", handleLogout)
router.get("/userbyToken", authMiddleware, getSingleUser)
router.post("/forget-password",forgetPasswordToken)
router.put("/reset-password/:token", resetPassword)
router.put("/password",authMiddleware, updatePassword)
router.delete("/removeFromCart", authMiddleware, removeFromCart)
router.put("/edit-user",authMiddleware, updateUser)
router.put("/block-user/:id",authMiddleware,isAdmin, blockUser)
router.put("/unblock-user/:id",authMiddleware,isAdmin, unblockUser)




export default router
