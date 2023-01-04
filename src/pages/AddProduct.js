// import "./ProductCard.css";
import "../App.css";
import { useState } from "react";
// import { Link } from "react-router-dom";

// A little bit more advanced component. A few different states that changes.
function AddProduct() {
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(
    "http://localhost:3000/assets/product_8.jpg"
  );

  // When the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();

    // New object with different values
    const newProd = {
      id,
      name,
      price,
      description,
      category,
      image,
    };

    // Fetch request with POST
    const res = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProd),
    });

    if (res.ok) {
      setID(0);
      setName("");
      setPrice(0);
      setDescription("");
      setCategory("");
      setImage("");
    }
  };

  // Every input calls the onChange function which sets the state to user input.
  return (
    <div className="form-container">
      <div className="form">
        <img className="form-image"
          src={"http://localhost:3000/assets/background_2.jpg"}
          alt="product"
        />

        <form className="add-product-page add-form" onSubmit={handleSubmit}>
          <h1>Add Products</h1>
          <label>id:</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setID(parseInt(e.target.value))}
          />
          <br />
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
          <br />
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label>Image:</label>
          <input
            type="text"
            // alt="Shoe"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />

          <button>Submit</button>
          <br />
          {/* <Link to="/">Back</Link> */}
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
