const express = require("express");
const router = express.Router();
const { searchRecipes } = require("../controller/recipeController");

// Route for searching recipes based on ingredients
router.get("/search", searchRecipes);

module.exports = router;
