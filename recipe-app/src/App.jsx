import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SearchRecipesPage from "./components/SearchRecipesPage";
import FavRecipe from "./components/FavRecipe";
import Navbar from "./components/Navbar";
import "./app.css"; // Global styles

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/searchRecipes",
    element: (
      <>
        <Navbar />
        <SearchRecipesPage />
      </>
    ),
  },
  {
    path: "/favRecipe",
    element: (
      <>
        <Navbar />
        <FavRecipe />
      </>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />; // Corrected 'rouster' to 'router'
}
