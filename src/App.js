import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Feature from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import { GlobalStyle } from "./globalstyles";

function App() {
  return (
    <Router>
    <GlobalStyle />
     <Hero />
     <Products heading='Choose Your Favorite' data={productData}/>
     <Feature />
     <Products heading='Amazing Treats For You' data={productDataTwo}/>
     <Footer />
    </Router>
  );
}

export default App;
   