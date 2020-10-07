import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import AutoPartsCatalog from "./components/BodyAutoParts/AutoPartsCatalog/AutoPartsCatalog";
import NavBar from "./components/BodyAutoParts/NavBar";
import RelatedProducts from "./components/BodyAutoParts/RelatedProducts/RelatedProducts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

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
          render={() => (
            <AutoPartsCatalog autoPartsCatalog={props.state.autoPartsCatalog} />
          )}
        />
        <Route
          path="/relatedProducts"
          render={() => (
            <RelatedProducts relatedProducts={props.state.relatedProducts} />
          )}
        />
      </div>

      <footer className="classFooter">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
