// import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import orderBy from "lodash/orderBy";
// import Navbar from "../components/MaterialNav";
// import SideBar from "../components/SideBarDrawer";

// import Product from './Product';
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
  // Table,
  // TableHead,
  // TableBody,
  // TableRow,
  // TableCell,
} from "@mui/material";
import "./ProductCard.css";
import "../App.css";

// import { useParams, Link } from "react-router-dom"

export default function Products() {
  //   const { id } = useParams()

  // ==========================================================
  const [productList, setProductList] = useState([]);
  // RADIO BUTTONS

  const [sortDirection, setSortDirection] = useState("asc");
  const [sortField, setSortField] = useState("name");
  const [showColor, setShowColor] = useState({
    "Category 1": "Category 1",
    "Category 2": "Category 2",
    "Category 3": "Category 3",
  });

  // const categoryNames = Object.keys(productList);
  // console.log("categoryNames", categoryNames);
  // console.log("productList", productList);

  // OBJECT
  const categoryNames = productList.map((product) => {
    return product.category;
  });

  const newCategoryNames = [...new Set(categoryNames)];
  console.log("newCategoryNames", newCategoryNames);
  console.log("categoryNames", categoryNames);
  console.log(typeof categoryNames);

  const showStyles = newCategoryNames.filter(
    (category) => {
      if (showColor[category]) {
        return (
          category === "Category 1" ||
          category === "Category 2" ||
          category === "Category 3"
        );
      }
    }
    // category === "Category 2" ||

    // category === "Category 3"
  );
  // .map((color) => colors[color])
  // .flat();
  console.log("showStyles", showStyles);
  console.log("showColor", showColor);

  const filteredProducts = productList.filter((product) =>
    showStyles.includes(product.category)
  );

  const sortedProducts = orderBy(filteredProducts, sortField, sortDirection);
  console.log("sortedProducts", sortedProducts);

  console.log("productList", productList);

  console.log("filteredProducts", filteredProducts);

  // const filteredProducts = productList.filter(
  //   (product) => product.category === "Category 2"
  // );

  // FILTER
  const changeShowColors = (e) => {
    console.log("e.target.name", e.target.name);
    console.log("e.target.checked", e.target.checked);

    setShowColor({
      ...showColor,
      [e.target.name]: e.target.checked,
    });
  };

  // console.log("setShowColor", setShowColor);
  // const [isSelected, setIsSelected] = useState({});

  // This is an array
  // const [filteringBookmark, setFilteringBookmark] = useState([]);
  // // text for you filter
  // const [search, setSearch] = useState("");

  // const productCategories = Object.values(productList.category);

  // useEffect(() => {
  //   setFilteringBookmark(
  //     productCategories.filter((book) => {
  //       // filter your text to lowercase if you want
  //       return book.includes(search.toLowerCase());
  //     })
  //   );
  // }, [search, productCategories]);
  // const [genre, setGenre] = useState("");

  // const changeCategory = (e) => {
  //   setGenre(e.target.value);

  //   const filteredMovies = productList.filter((productGenre) =>
  //     productGenre.category.includes(e.target.value)
  //   );
  //   setGenre(filteredMovies);
  // };

  // <div>
  //   {productList
  //     .filter((categories) => categories.category === "Category 3")
  //     .map((filteredCategory) => {
  //       return <div>{filteredCategory.name}Hello</div>;
  //     })}
  // </div>;

  // const sortedProducts = orderBy(filteredProducts, sortField, sortDirection);

  // DIRECTION

  const changeSortDirection = (e) => {
    setSortDirection(e.target.value);
  };

  // DROPDOWN

  function changeSortField(e) {
    // console.log(e.target.value);
    setSortField(e.target.value);
    console.log(sortField);
  }

  // Filter on category (checkboxes)

  // const [category, setCategory] = useState({ "category 1": false });

  // const handleCategoryChange = (e) => {
  //   // e = event (checkbox)
  //   setCategory({ ...category, [e.target.category]: e.target.checked });
  // };

  // ==========================================================

  useEffect(() => {
    const getProducts = async () => {
      // const res = await fetch(`https://fakestoreapi.com/products`)
      const res = await fetch(`http://localhost:3001/products`);

      const productList = await res.json();

      setProductList(productList);
    };

    getProducts();
  }, []);

  if (!productList) {
    return <div>Product not found</div>;
  }

  // console.log("productList", productList);
  // console.log("showcolors", showColor[category]);

  return (
    <>
      <Grid container spacing={2} padding={4}>
        {/* <Navbar />
        <SideBar /> */}

        <Grid item xs={12}>
          <h1>PRODUCTS</h1>
        </Grid>
        <Grid item xs={4}>
          {/* RADIOBUTTONS */}

          <FormControl>
            <FormLabel>Sort Direction</FormLabel>
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
        </Grid>

        <Grid item xs={4}>
          {/* SELECT DROPDOWN */}

          <FormControl>
            <FormLabel>Sort on</FormLabel>
            <Select value={sortField} onChange={changeSortField}>
              <MenuItem value={"name"}>Name</MenuItem>
              <MenuItem value={"price"}>Price</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* CHECKBOXES */}
        {/* <Grid item xs={4}>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={category["category 1"]}
                    onChange={handleCategoryChange}
                    name="category 1"
                  />
                }
                label="Category 1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={category.category2}
                    onChange={handleCategoryChange}
                    name="category 2"
                  />
                }
                label="Category 2"
              />
            </FormGroup>
          </FormControl>
        </Grid> */}

        {/* <form className="filter-category">
   <p>FILTER BY CATEGORY</p>
   <Select id="category-input" value={props.categories} onChange={(e) => 
    setSearch(e)}
   >
     {filteringBookmark.map(category => (
      <MenuItem key={category.id} name={category.name} value={category.id} > 
            {category.name}
      </MenuItem>
     )}
   </Select>
        </form> */}

        {/* <Grid item xs={12}>
          <p>FILTER BY CATEGORY</p>
          <Select
            id="category-input"
            value={productList.categories}
            onChange={(e) => setSearch(e)}
          />
          {filteringBookmark.map((category) => (
            <MenuItem
              key={category.id}
              name={category.name}
              value={category.id}
            >
              {category.name}
            </MenuItem>
          ))}
        </Grid> */}

        {/* <div>
          {productList
            .filter((categories) => categories.category === "Category 3")
            .map((filteredCategory) => {
              return <div>{filteredCategory.name}Hello</div>;
            })}
        </div> */}

        <Grid item xs={4}>
          {/* FILTER */}

          <FormGroup>
            <FormLabel>Filter on category</FormLabel>
            {newCategoryNames.map((category, i) => (
              <FormControlLabel
                key={i}
                control={
                  <Checkbox
                    checked={showColor[category]}
                    onChange={changeShowColors}
                    name={category}
                  />
                }
                label={category}
              />
            ))}
          </FormGroup>
        </Grid>

        <Grid container spacing={2}>
          {sortedProducts.map((product) => (
            <Grid item xs={1}>
              <div>
                Name: {product.name}
                <br></br>
                Price: {product.price}
              </div>
              <Link to={"../Product/" + product.id}>More info</Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

// export default App;
