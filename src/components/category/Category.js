import "../category/category.css";
export default function Category({ categoryItems, image, sliderCategories }) {
  return (
    <>
      <img
        src={image.backgroundImage}
        alt={categoryItems.heading}
        className="background-image"
      />

      <div className="heading">
        <h2>{categoryItems.heading}</h2>
        <p>{categoryItems.subHeading}</p>
        <div className="book-btn">
          <button> Book Now</button>
        </div>
      </div>
    </>
  );
}
