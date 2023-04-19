import React, { useEffect, useState } from "react";
import jsonData from "../../data/category.json";
import Category from "../category/Category";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import categoryImage from "../../assets/3dpay5.png";
import "../selectedCategory/selectedCategory.css";

export default function SelectedCategoryPage() {
  const [sliderCategories, setSliderCategories] = useState([]);

  useEffect(() => {
    // Set the getCookie function to get selected Category from cookie
    function getCookie(cookieName) {
      const cookieValue = document.cookie
        .split("; ")
        .find((name) => name.startsWith(`${cookieName}=`))
        ?.split("=")[1];
      return cookieValue;
    }

    // Get the selected category from the cookie
    const selectedCategory = getCookie("selectedCategory");

    // Filter the slider data based on the selected category
    const filteredSliderData = jsonData.data.find(
      (item) => item.category === selectedCategory
    ).slider;

    // Set the filtered slider data to the state
    setSliderCategories(filteredSliderData);
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {/* Map the sliderCategories state to display the data  */}
        {sliderCategories.map((categoryItems) => (
          <>
            {/* Map the background object to display the image and color */}
            {categoryItems?.background.map((image) => (
              <div
                className="category-container"
                style={{ background: image.backgroundColor }}
              >
                {/* Category component to display the Items */}
                <Category
                  categoryItems={categoryItems}
                  image={image}
                  sliderCategories={sliderCategories}
                />
              </div>
            ))}
          </>
        ))}
      </Slider>
      <div className="category-image">
        <img src={categoryImage} alt="category" className="category-image" />
      </div>
    </>
  );
}
