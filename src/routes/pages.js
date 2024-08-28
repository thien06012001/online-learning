const express = require("express");
const router = express.Router();

const AuthRender = require("../app/controllers/pages/auth");
const HomeRender = require("../app/controllers/pages/home");

// Auth pages
router.get('/sign-up', AuthRender.signUp);
router.get('/sign-in', AuthRender.signIn);

// Home page
router.get("/", HomeRender.render);

module.exports = router;