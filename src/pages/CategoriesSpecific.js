import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { Grid } from "@mui/material";

export default function CategoriesSpecific() {
  const { category } = useParams();

  const [categoriesSpecific, setCategoriesSpecific] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch(`http://localhost:3001/products/`);
      const categoriesSpecific = await res.json();

      setCategoriesSpecific(categoriesSpecific);
    };

    getCategories();
  },[category]);

  if (!categoriesSpecific) {
    return <div>Product not found</div>;
  }

  // Here we filter the array to only show the products that have the same category as the category in the API.
  const categoriesSpecificFilter = categoriesSpecific.filter(
    (categoriesSpecific) => categoriesSpecific.category === category
  );

  return (
    <>
      <div className="category-specific-container">
        <Grid item xs={12}>
          <h1>All Our {category} Products</h1>
        </Grid>

        <div className="">
          <Grid className="grid-container" container spacing={40}>
            {categoriesSpecificFilter.map((product) => (
              <>
                <Grid item xs={4}>
                  <Card
                    name={product.name}
                    price={product.price}
                    desc={product.description}
                    img={product.image}
                    id={product.id}
                  />
                </Grid>
              </>
            ))}
            {/* <Link to="/">Back</Link> */}
          </Grid>
        </div>
      </div>
    </>
  );
}
