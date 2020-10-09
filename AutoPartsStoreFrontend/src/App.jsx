import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/BodyAutoParts/NavBar";
import AutoPartsCatalog from "./components/BodyAutoParts/AutoPartsCatalog/AutoPartsCatalog.jsx";
import RelatedProducts from "./components/BodyAutoParts/RelatedProducts/RelatedProducts.jsx";
import CreateModelCar from "./components/BodyAutoParts/AutoPartsCatalog/ModelCar/CreateModelCar/CreateModelCar.jsx";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = (props) => {
  return (
    <div className="container">
      <header className="classHeader">
        <Header
          newSearchText={props.state.newSearchText}
          dispatch={props.dispatch}
        />
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
        <Route
          path="/createModelCar"
          render={() => (
            <CreateModelCar
              newCreateModelCarElement={props.state.newCreateModelCarElement}
              dispatch={props.dispatch}
            />
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
