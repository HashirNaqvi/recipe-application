const express = require("express");
const {
  userSignUp,
  userLogin,
  getUser,
} = require("../controller/userController");

const router = express.Router();

// Routes
router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.get("/:id", getUser);

module.exports = router;
