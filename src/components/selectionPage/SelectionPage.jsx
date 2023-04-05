import React, { useState } from "react";
import categoryImage from "../../assets/3dpay5.png";
import "../selectionPage/selectionPage.css";

export default function SelectionPage() {
  // Use the state to set the Category
  const [category, setCategory] = useState("");

  const handleCategorySelect = (selectedCategory) => {
    // Set the selected category state
    setCategory(selectedCategory);

    // Save the selected category as a cookie
    document.cookie = `selectedCategory=${selectedCategory}; path="/"`;

    // Redirect to the home page
    window.location.href = "/home";
  };

  return (
    <div className="home-container">
      <div className="image">
        {/* Imported image from assets folder */}

        <img src={categoryImage} alt="" className="landingpage-image" />
      </div>
      <div className="category-buttons">
        <button onClick={() => handleCategorySelect("a")}>Category A</button>
        <button onClick={() => handleCategorySelect("b")}>Category B</button>
      </div>
    </div>
  );
}
