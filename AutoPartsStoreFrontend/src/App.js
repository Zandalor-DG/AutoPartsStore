import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/BodyAutoParts/NavBar";
import RelatedProductsContainer from "./components/BodyAutoParts/RelatedProducts/RelatedProductsContainer.jsx";
import CreateRelatedProduct from "./components/BodyAutoParts/RelatedProducts/CreateRelatedProduct/CreateRelatedProduct.jsx";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AutoPartsCatalogContainer from "./components/BodyAutoParts/AutoPartsCatalog/AutoPartsCatalogContainer";

const App = (props) => {
  return (
    <div className="container">
      <header className="classHeader">
        <Header />
      </header>

      <div className="classContent">
        <NavBar />
        <Route
          path="/autoPartsStore"
          render={() => <AutoPartsCatalogContainer />}
        />
        <Route
          path="/relatedProducts"
          render={() => <RelatedProductsContainer />}
        />
        <Route
          path="/createRelatedProduct"
          render={() => <CreateRelatedProduct />}
        />
      </div>

      <footer className="classFooter">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
