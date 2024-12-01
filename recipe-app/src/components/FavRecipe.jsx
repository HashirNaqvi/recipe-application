import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function FavRecipe() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage or a database
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedRecipes);
  }, []);

  // Remove a recipe from favorites
  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((recipe) => recipe.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="fav-recipes">
      <h1>Your Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet. Start adding some!</p>
      ) : (
        <div className="recipe-list">
          {favorites.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-img"
              />
              <h2 className="recipe-title">{recipe.title}</h2>
              <p>
                <strong>Ingredients:</strong>{" "}
                {recipe.ingredients?.join(", ") || "Not available"}
              </p>
              <div className="recipe-actions">
                <button
                  onClick={() => removeFavorite(recipe.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
