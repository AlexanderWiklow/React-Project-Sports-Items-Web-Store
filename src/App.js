import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import SingleUser from './pages/Users'
import Products from "./pages/Products";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
import "./App.css";
import CategoriesSpecific from "./pages/CategoriesSpecific";
import "./pages/ProductCard.css";
import About from "./pages/About";
import AddProduct from "./pages/AddProduct";
import Navbar from './components/MaterialNav'
import SideBar from './components/SideBarDrawer'
// import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <SideBar/>
        {/* <Navbar /> */}
        {/* <header>
          <ul>
            <li>
              <Link to="./">Home</Link>
            </li>
            <li>
              <Link to="./Product">Product</Link>
            </li>
            <li>
              <Link to="./pages/About">About</Link>
            </li>
            <li>
              <Link to="./pages/Categories">Categories</Link>
            </li>
            <li>
              <Link to="./pages/AddProduct">Add Product</Link>
            </li>
            <li>
              <Link to="./Product">Contact</Link>
            </li>
          </ul>
        </header> */}
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />

          <Route path="/pages/Categories" element={<Categories />} />
          <Route
            path="/pages/Categories/CategoriesSpecific/:category"
            element={<CategoriesSpecific />}
          />

          <Route path="/pages/About" element={<About />} />
          <Route path="/pages/AddProduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// function Home() {
//   return <h1>Home page</h1>;
// }

export default App;
