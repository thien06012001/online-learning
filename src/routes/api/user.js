const express = require("express");
const router = express.Router();
const userController = require("../../app/controllers/api/UserController");

// [GET] /sign-up
router.post("/sign-up", userController.auth);

// [POST] /sign-up
router.post("/sign-up", userController.store);
module.exports = router;