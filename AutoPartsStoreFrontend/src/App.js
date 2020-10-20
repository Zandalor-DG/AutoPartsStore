import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/BodyAutoParts/NavBar";
import RelatedProductsContainer from "./components/BodyAutoParts/RelatedProducts/RelatedProductsContainer.jsx";
import CreateRelatedProduct from "./components/BodyAutoParts/RelatedProducts/CreateRelatedProduct/CreateRelatedProduct.jsx";
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import AutoPartsCatalogContainer from "./components/BodyAutoParts/AutoPartsCatalog/AutoPartsCatalogContainer";
import LoginAccount from "./components/Account/LoginAccount";
import RegisterAccount from "./components/Account/RegisterAccount";

const App = (props) => {
  return (
    <div className="container">
      <HeaderContainer />
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

        <Route path="/loginAccount" render={() => <LoginAccount />} />

        <Route path="/registerAccount" render={() => <RegisterAccount />} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
