const express = require("express");
const authController = require("../controller/auth.controller")
const router = express.Router();


/**
 * @route /register
 * @description help user register 
 */
router.post("/register",authController.authRegister);

/**
 * @route /login
 * @description help user in login 
 */
router.post("/login",authController.authLogin);

/**
 * @route /logout
 */

router.post("/logout",authController.authLogout)



module.exports = router;