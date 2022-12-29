// import { Link } from "react-router-dom";
// import Product from './Product';
import "./ProductCard.css";
import "../App.css";

// import { useEffect, useState } from "react";
import { useState } from "react";

// import { useParams, Link } from "react-router-dom"

// export default function AddProduct() {
//   //   const { id } = useParams()
//   const [addProduct, setaddProduct] = useState([]);

//   useEffect(() => {
//     const addProduct = async () => {
//       const res = await fetch(`http://localhost:3001/products`);
//       const addProduct = await res.json();

//       setaddProduct(addProduct);
//     };

//     addProduct();
//   }, []);

//   console.log("addProduct", addProduct);

//   return (
//     <>
//       <Link to="/">Back</Link>
//       <p>ADD-PRODUCT:</p>
//       <div className="card-container">
//         <form>
//           <label>
//             Name:
//             <input type="text" name="name" />
//           </label>

//           <label>
//             Choose product category:
//             <select>
//               <option value="grapefruit">Category 1</option>
//               <option value="lime">Category 2</option>
//               <option value="coconut">Category 3</option>
//             </select>
//             <br></br>
//             <input type="file" />
//           </label>

//           <input type="submit" value="Submit" />
//         </form>

//         {/* {addProduct.map((product) => <div className='card'><img src={product.image} alt="product"/><p>{product.title}  <Link to={"./Product/" + product.id}>More info</Link></p></div>

//               ) } */}

//         {/* <p>{addProduct.title}</p> */}
//       </div>
//     </>
//   );
// }

// import { useState } from "react";

function AddProduct() {
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProd = {
      id,
      name,
      price,
      description,
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
      setDescription("");
      setCategory("");
      console.log("ID", id);
      console.log("ID", typeof id);
    }
  };

  console.log("setID", setID);

  return (
    <form onSubmit={handleSubmit}>
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
      {/* <br />
      <label htmlFor="category">Select a category:</label>
      <select id="category" name="category">
        <option
          type="number"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          1
        </option>
        <option
          type="number"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          2
        </option>
        <option
          type="number"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          3
        </option>
        <option
          type="number"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          4
        </option>
      </select> */}
      <br />
      <label>Category:</label>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <br />
      <button>Add product</button>
    </form>
  );

  // ===========================

  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  // const [email, setEmail] = useState("");
  // const [imgLink, setImgLink] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newUser = {
  //     name,
  //     age,
  //     email,
  //     imgLink,
  //   };

  //   console.log(newUser);

  //   const res = await fetch("http://localhost:3001/members", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newUser),
  //   });

  //   if (res.ok) {
  //     setName("");
  //     setAge(0);
  //     setEmail("");
  //   }
  // };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label>Namn:</label>
  //     <input
  //       type="text"
  //       value={name}
  //       onChange={(e) => setName(e.target.value)}
  //     />
  //     <br />
  //     <label>Ålder:</label>
  //     <input
  //       type="number"
  //       value={age}
  //       onChange={(e) => setAge(parseInt(e.target.value))}
  //     />
  //     <br />
  //     <label>Email:</label>
  //     <input
  //       type="email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //     />
  //     <br />
  //     <label>Image Link:</label>
  //     <input
  //       type="text"
  //       value={imgLink}
  //       onChange={(e) => setImgLink(e.target.value)}
  //     />
  //     <br />
  //     <button>Lägg till medlem</button>
  //   </form>
  // );

  // ===========================
}

export default AddProduct;

// function Product({ product }) {

//     return (
//     <ul>
//      {addProduct.map(product => (
//         <Product key={product.id} product={product} />
//     ))}
//     </ul>

//     <div className="product">
//       <p>{product.title}</p>
//     </div>
//   )
// }
