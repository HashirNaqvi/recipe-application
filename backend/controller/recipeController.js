const axios = require("axios");

// Replace with your actual Spoonacular API key
const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;

// Controller function to search recipes
exports.searchRecipes = async (req, res) => {
  try {
    const { ingredients, mealType, diet, maxTime } = req.query;

    if (!ingredients) {
      return res.status(400).json({ error: "Ingredients are required." });
    }

    // Base URL for Spoonacular API
    const baseUrl = `https://api.spoonacular.com/recipes/complexSearch`;

    // Build query parameters
    const params = {
      apiKey: SPOONACULAR_API_KEY,
      includeIngredients: ingredients, // Comma-separated ingredient list
      type: mealType, // Optional: breakfast, lunch, dinner, etc.
      diet: diet, // Optional: vegetarian, vegan, gluten-free, etc.
      maxReadyTime: maxTime, // Optional: max preparation time in minutes
      addRecipeInformation: true, // Get detailed recipe info
      number: 10, // Number of recipes to return
    };

    // Fetch recipes from the Spoonacular API
    const response = await axios.get(baseUrl, { params });

    // Return the recipes as a response
    res.status(200).json({ recipes: response.data.results });
  } catch (error) {
    console.error("Error searching recipes:", error.message);
    res
      .status(500)
      .json({ error: "Failed to fetch recipes. Please try again." });
  }
};
