import React, { useState } from "react";
import axios from "axios";

export default function SearchRecipesPage() {
  const [ingredients, setIngredients] = useState("");
  const [mealType, setMealType] = useState("");
  const [diet, setDiet] = useState("");
  const [maxPrepTime, setMaxPrepTime] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "http://localhost:5000/api/recipe/search",
        {
          ingredients,
          mealType,
          diet,
          maxPrepTime,
        }
      );
      setRecipes(response.data);
    } catch (error) {
      console.error("Error searching recipes:", error.message);
    }
  };

  const handleLike = (recipeId) => {
    console.log("Liked recipe:", recipeId); // Implement like functionality
  };

  const handleSave = (recipe) => {
    console.log("Saved recipe:", recipe); // Save to the favorites page logic
  };

  return (
    <div className="recipe-search-page">
      <h1>Search Recipes</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
          <option value="">Select Meal Type</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snacks</option>
        </select>
        <select value={diet} onChange={(e) => setDiet(e.target.value)}>
          <option value="">Select Dietary Needs</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten free">Gluten-Free</option>
        </select>
        <input
          type="number"
          placeholder="Max Prep Time (minutes)"
          value={maxPrepTime}
          onChange={(e) => setMaxPrepTime(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="recipes-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>Ingredients:</p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <button onClick={() => handleLike(recipe.id)}>Like</button>
            <button onClick={() => handleSave(recipe)}>Save</button>
          </div>
        ))}
      </div>
    </div>
  );
}
