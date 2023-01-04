import { useState } from "react";
import { useEffect } from "react";
import orderBy from "lodash/orderBy";
import Card from "../components/Card";
import "../styles/main.scss";
import {
  Grid,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormGroup,
  Checkbox,
} from "@mui/material";
import "../App.css";

export default function Products() {
  const [productList, setProductList] = useState([]);

  const [sortDirection, setSortDirection] = useState("asc");
  const [sortField, setSortField] = useState("name");
  const [showCategory, setShowCategory] = useState({
    Running: "Running",
    Tennis: "Tennis",
  });

  // OBJECT. Sort every category
  const categoryNames = productList.map((product) => {
    return product.category;
  });

  // set new array with unique values
  const newCategoryNames = [...new Set(categoryNames)];

  const showStyles = newCategoryNames.filter(
    // eslint-disable-next-line array-callback-return
    (category) => {
      if (showCategory[category]) {
        return category === "Running" || category === "Tennis";
      }
    }
  );

  // Filter all product that match the category
  const filteredProducts = productList.filter((product) =>
    showStyles.includes(product.category)
  );

  // Collection, iteratees, orders
  const sortedProducts = orderBy(filteredProducts, sortField, sortDirection);

  // FILTER
  // Categories being shown
  const changeShowCategories = (e) => {
    setShowCategory({
      ...showCategory,
      [e.target.name]: e.target.checked,
    });
  };

  // DIRECTION
  // ASCENDING, DESCENDING
  const changeSortDirection = (e) => {
    setSortDirection(e.target.value);
  };

  // DROPDOWN
  // SORT ON NAME, PRICE
  function changeSortField(e) {
    setSortField(e.target.value);
  }

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(`http://localhost:3001/products`);

      const productList = await res.json();

      setProductList(productList);
    };

    getProducts();
  }, []);

  if (!productList) {
    return <div>Product not found</div>;
  }

  return (
    <div className="products-container-page">
      <div className="sorting">
        {/* SELECT DROPDOWN */}

        <FormControl className="sort-form">
          <FormLabel>
            <h2>Sort on</h2>
          </FormLabel>
          <Select value={sortField} onChange={changeSortField}>
            <MenuItem value={"name"}>Name</MenuItem>
            <MenuItem value={"price"}>Price</MenuItem>
          </Select>
        </FormControl>

        {/* RADIOBUTTONS */}

        <FormControl className="sort-form">
          <FormLabel>
            <h2>Sort Direction</h2>
          </FormLabel>
          <RadioGroup
            name="sort-direction"
            value={sortDirection}
            onChange={changeSortDirection}
          >
            <FormControlLabel
              value="asc"
              control={<Radio />}
              label="Ascending"
            />
            <FormControlLabel
              value="desc"
              control={<Radio />}
              label="Descending"
            />
          </RadioGroup>
        </FormControl>

        {/* FILTER */}

        <FormGroup className="sort-form">
          <FormLabel>
            <h2>Filter on category</h2>
          </FormLabel>
          {newCategoryNames.map((category, i) => (
            <FormControlLabel
              key={i}
              control={
                <Checkbox
                  checked={showCategory[category]}
                  onChange={changeShowCategories}
                  name={category}
                />
              }
              label={category}
            />
          ))}
        </FormGroup>
      </div>

      <Grid className="grid-container" container spacing={0} padding={4}>
        <Grid className="front-page-title" item xs={12}>
          <h1>PRODUCTS</h1>
        </Grid>

        <Grid className="inner-card-grid" container spacing={40}>
          {sortedProducts.map((product) => (
            <Grid item xs={2}>
              <Card
                name={product.name}
                price={product.price}
                desc={product.description}
                img={product.image}
                id={product.id}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
