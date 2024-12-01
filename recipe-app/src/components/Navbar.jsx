import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "./modal";
import InputForm from "./InputForm";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  let token = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(!token);
  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setIsLogin(!token);
  }, [token]);

  const handleLoginLogout = () => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLogin(true);
    } else {
      setIsOpen(true);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/searchRecipes?query=${encodeURIComponent(searchQuery)}`);
    } else {
      alert("Please enter a valid search query!");
    }
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <h2>RecipeHub</h2>
        </div>
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <nav className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/searchRecipes" activeClassName="active">
                Search Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to={!isLogin ? "/favRecipe" : "/"}
                activeClassName="active"
                onClick={() => isLogin && setIsOpen(true)}
              >
                Favourites
              </NavLink>
            </li>
            <li onClick={handleLoginLogout}>
              <p className="login">
                {isLogin ? "Login" : "Logout"}
                {user?.email ? ` (${user.email})` : ""}
              </p>
            </li>
          </ul>
        </nav>
        <div
          className="menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
}
