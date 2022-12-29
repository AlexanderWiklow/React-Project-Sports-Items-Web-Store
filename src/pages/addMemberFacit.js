import { useState } from "react";

function AddProduct() {
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProd = {
      id,
      name,
      price,
      desc,
      category,
    };

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
      setDesc("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>id:</label>
      <input type="number" value={id} onChange={(e) => setID(e.target.value)} />
      <br />
      <label>Name:</label>
      <input type="text" value={id} onChange={(e) => setID(e.target.value)} />
      <br />
      <label>price:</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button>Add product</button>
    </form>
  );
}

export default AddProduct;
