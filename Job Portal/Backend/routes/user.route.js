
import express from "express";
import { 
    login, 
    logout, 
    register, 
    updateProfile,
 } from "../contollers/user.controller.js";
import authenticateToken from "../middleware/isAuthenticated.js";                  
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile/update").post(authenticateToken,singleUpload, updateProfile);     // Middleware --> checks before the profile gets updated.

export default router;