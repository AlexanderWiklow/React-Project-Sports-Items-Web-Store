// import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "reactjs-popup/dist/index.css";

export default function DeleteProduct() {
  const { id } = useParams();
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
  };

  return (
    <>
      <div>
        <button className="delete-btn" onClick={() => onDelete(id)}>
          Delete Product
        </button>
      </div>
    </>
  );
}
