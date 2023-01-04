import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
import "./App.scss";
import CategoriesSpecific from "./pages/CategoriesSpecific";
import About from "./pages/About";
import AddProduct from "./pages/AddProduct";
import Navbar from "./components/MaterialNav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* BrowserRouter is a router implementation that uses the HTML5 history API (pushstate, replacestate, and popstate events) to keep your UI in sync with the URL. It is the parent component used to store all other components. Route: This is a new component introduced in v6 and an upgrade of the component. */}
      <BrowserRouter className="BrowserRouter">
        <Navbar />
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
