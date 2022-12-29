import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import DeleteProduct from "./DeleteProduct";
// import Navbar from "./components/MaterialNav";
// import SidBar from "./components/SideBarDrawer";

// import Products from './Products';

export default function Product({ price }) {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  console.log(id);

  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      // const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const res = await fetch(`http://localhost:3001/products/${id}`);
      const products = await res.json();

      setProducts(products);
    };

    getProduct();
  }, [id]);

  if (!products) {
    return <div>Product not found</div>;
  }

  //  ===========================

  const onEdit = async (id, productName, price, products) => {
    await fetch(`http://localhost:3001/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        name: productName,
        price: price,
        // description: descr,
        // category: category,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        // setProducts((products) => [...products, data]);
        console.log("products", products);
        console.log(typeof products);

        const updatedUsers = products.map((user) => {
          if (user.id === id) {
            user.name = productName;
            user.price = price;
            //  user.author = author;
          }

          // if (user.id === id) {
          //   for (let key in products) {
          //     if (products.hasOwnProperty(key)) {
          //       console.log(key);
          //     }
          //   }
          // }

          return user;
        });

        setProducts((products) => updatedUsers);
      })
      .catch((error) => console.log(error));

    // this.onEdit();
    navigate("/");
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  // const handleDelete = () => {
  //   onDelete(id);
  // };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(
      id,
      evt.target.productName.value,
      parseInt(evt.target.price.value)
      // evt.target.descr.value,
      // evt.target.category.value
    );
    // console.log("handleonedit", id)
    setIsEdit(!isEdit);
  };

  //  ===========================

  return (
    <>
      {/* <Link to="/">Back</Link>
      <div className="card">
        <h1>
          Name: {products.name} Price: {products.price}
        </h1>
        <DeleteProduct />
      </div> */}

      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input
            placeholder="Product Name"
            name="productName"
            defaultValue={products.name}
          />
          <br></br>
          <input placeholder="Price" name="price" defaultValue={price} />
          <br></br>
          {/* <input
            placeholder="Description"
            name="descr"
            defaultValue={products.description}
          />
          <br></br>
          <input
            placeholder="Category"
            name="category"
            defaultValue={products.category}
          />
          <br></br> */}

          {/* <input placeholder="Author" name="author" defaultValue={author} /> */}
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="user">
          <Link to="/">Back</Link>

          <div className="card">
            <h1>
              Name: {products.name} Price: {products.price}
            </h1>
            <DeleteProduct />
          </div>

          <span className="user-title">{price}</span>
          {/* <span className="user-author">{author}</span> */}
          <div>
            <button onClick={handleEdit}>Edit</button>
            {/* <button onClick={handleDelete}>Delete</button> */}
          </div>
        </div>
      )}
    </>
  );
}
