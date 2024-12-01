import React, { useState } from "react";
import foodRecipe from "../assets/foodRecipe.png"; // Verify the path
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Ensure Footer is defined

export default function Home() {
  const addRecipe = () => {
    alert("This feature is under development.");
  };

  return (
    <>
      <Navbar />
      <section className="home">
        <div className="left">
          <h1>Recipe Recommendation</h1>
          <h5>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </h5>
          <button onClick={addRecipe}>Find Your Meal</button>
        </div>
        <div className="right">
          <img
            src={foodRecipe}
            width="520"
            height="500"
            alt="Delicious food recipes illustration"
          />
        </div>
      </section>

      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d4f6e8"
            fillOpacity="1"
            d="M0,32L40,32C80,32,160,32,240,58.7C320,85,400,139,480,149.3C560,160,640,128,720,101.3C800,75,880,53,960,80C1040,107,1120,181,1200,213.3C1280,245,1360,235,1400,229.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Footer />
    </>
  );
}