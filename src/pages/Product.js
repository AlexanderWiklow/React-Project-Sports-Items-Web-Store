import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import DeleteProduct from "./DeleteProduct";

// this component is for the single product page
export default function Product() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`http://localhost:3001/products/${id}`);
      const products = await res.json();

      setProducts(products);
    };

    getProduct();
  }, [id]);

  if (!products) {
    return <div>Product not found</div>;
  }

  const onEdit = async (
    id,
    productName,
    price,
    desc,
    category,
    image,
    products
  ) => {
    const res1 = await fetch(`http://localhost:3001/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        name: productName,
        price: price,
        description: desc,
        category: category,
        image: "http://localhost:3000/assets/product_8.jpg",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const res2 = await res1.json();
    const product = await res2.map((item) => {
      if (item.id === id) {
        item.name = productName;
        item.price = price;
        item.description = desc;
        item.category = category;
        item.image = "http://localhost:3000/assets/product_8.jpg";
      }

      return product;
    });

    setProducts(product);
    navigate("/");
  };

  // .then((response) => {
  //   if (response.status !== 200) {
  //     return;
  //   } else {
  //     return response.json();
  //   }
  // })
  // .then((data) => {
  //   const updatedproducts = products.map((item) => {
  //     if (item.id === id) {
  //       item.name = productName;
  //       item.price = price;
  //       item.description = desc;
  //       item.category = category;
  //       item.image = "http://localhost:3000/assets/product_8.jpg";
  //     }

  //     return item;
  //   });

  //   setProducts((products) => updatedproducts);
  // })
  // .catch((error) => console.log(error));

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(
      id,
      evt.target.productName.value,
      parseInt(evt.target.price.value),
      evt.target.desc.value,
      evt.target.category.value
    );

    setIsEdit(!isEdit);
  };

  return (
    <div className="single-product-page">
      {isEdit ? (
        <div className="edit-form-container">
          <div className="edit-form">
            <form onSubmit={handleOnEditSubmit}>
              <label>Name: </label>
              <input
                placeholder="Product Name"
                name="productName"
                defaultValue={products.name}
              />
              <br></br>
              <label>Price: </label>
              <input
                placeholder="Price"
                name="price"
                defaultValue={products.price}
              />
              <br></br>
              <label>Description: </label>
              <input
                placeholder="Description"
                name="desc"
                defaultValue={products.description}
              />
              <br></br>
              <label>Category:</label>
              <input
                placeholder="Category"
                name="category"
                defaultValue={products.category}
              />
              <br></br>

              <button onSubmit={handleOnEditSubmit}>Save</button>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div className="content">
            <img src={products.image} alt="shoe"></img>
            <div className="text-content">
              <h1>{products.name}</h1>
              <h2>{products.price} $</h2>
              <p>
                Are you looking for the perfect pair of running shoes? Look no
                further! Our running shoes offer maximum comfort, support, and
                durability to help you tackle any distance. Our shoes feature
                responsive cushioning and a flexible sole that adapts to your
                stride, making them perfect for runners of all levels.
              </p>
              <div className="edit-btns">
                <button className="edit-btn" onClick={handleEdit}>
                  Edit
                </button>
                <DeleteProduct />
                <button className="back-btn">
                  <Link to="/">Back</Link>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
