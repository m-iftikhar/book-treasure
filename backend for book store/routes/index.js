import express from "express";
const router = express.Router();

import userRoute from "./authRouter.js"
import productRoute from "./productRouter.js"
import assetRoute from "./assetroute.js"
import emailRoute from "./emailRouter.js"


 

router.use("/product", productRoute);
router.use("/", userRoute);
router.use("/", assetRoute);
router.use("/email", emailRoute);

export default router;
 