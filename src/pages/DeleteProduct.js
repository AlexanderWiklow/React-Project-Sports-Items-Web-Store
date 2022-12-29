// import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./ProductCard.css";
// import DeleteProduct from "./DeleteProduct";
// import Products from './Products';
export default function DeleteProduct() {
  const { id } = useParams();
  // const [products, setProducts] = useState([]);
  //   console.log(id);
  const navigate = useNavigate();

  const onDelete = async (id) => {
    await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    navigate("/");
    //   .then((response) => {
    //     if (response.status !== 200) {
    //       return;
    //     } else {
    //       setProduct(
    //         product.filter((product) => {
    //           return product.id !== id;
    //         })
    //       );
    //     }
    //   })
    //   .catch((error) => console.log(error));
  };

  //   const onEdit = async (id, name, price) => {
  //     await fetch(`http://localhost:3001/posts/${id}`, {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         id: id,
  //         name: name,
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //       .then((response) => {
  //         if (response.status !== 200) {
  //           return;
  //         } else {
  //           return response.json();
  //         }
  //       })
  //       .then((data) => {
  //         // setUsers((products) => [...products, data]);
  //         const updatedUsers = products.map((product) => {
  //           if (product.id === id) {
  //             product.name = name;
  //             product.price = price;
  //           }

  //           return product;
  //         });

  //         setProducts((products) => updatedUsers);
  //       })
  //       .catch((error) => console.log(error));
  //   };

  return (
    <>
      <Link to="/">Back</Link>
      <div className="card">
        <button onClick={() => onDelete(id)}>Delete Product</button>
        {/* <button onClick={() => onEdit(id)}>Edit Product</button> */}
      </div>
    </>
  );
}
