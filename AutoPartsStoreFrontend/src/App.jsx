import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import AutoPartsCatalog from "./components/BodyAutoParts/AutoPartsCatalog/AutoPartsCatalog";
import NavBar from "./components/BodyAutoParts/NavBar";
import RelatedProducts from "./components/BodyAutoParts/RelatedProducts/RelatedProducts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="container">
      <header className="classHeader">
        <Header />
      </header>
      <div className="classContent">
        <NavBar />
        <Route path="/autoPartsStore" render={() => <AutoPartsCatalog />} />
        <Route path="/relatedProducts" render={() => <RelatedProducts />} />
      </div>
      <footer className="classFooter">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
