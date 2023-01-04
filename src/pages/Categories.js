import { Link } from "react-router-dom";
import "../styles/main.scss";
import { useEffect, useState } from "react";

//  Here we manages two states. Also uses the useEffect hook to fetch data from the API.
export default function Categories() {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch(`http://localhost:3001/products`);

      const categoriesList = await res.json();

      setCategoriesList(categoriesList);
    };

    getCategories();
  }, []);

  // Here we use the Set object to remove duplicates from the array.
  const uniqueCategories = [
    ...new Set(categoriesList.map((item) => item.category)),
  ];

  const imageShoe = "http://localhost:3000/assets/product_1.jpg";
  const imageTennis = "http://localhost:3000/assets/tennis_1.jpg";

  return (
    <>
      {/* <Link to="/">Back</Link> */}
      <div>
        <h1>CATEGORIES:</h1>

        <div className="link-btn-container">
          {uniqueCategories.map((categories) => (
            <div className="category-link-btn">
              <Link
                className="link-btn-category"
                to={"./CategoriesSpecific/" + categories}
              >
                <h3>{categories}</h3>
              </Link>
            </div>
          ))}
        </div>

        <img src={imageShoe} alt="shoe"></img>
        <img src={imageTennis} alt="tennis"></img>
      </div>
    </>
  );
}
