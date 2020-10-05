import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import AutoPartsCatalog from './components/BodyAutoParts/AutoPartsCatalog/AutoPartsCatalog';
import RelatedProducts from './components/BodyAutoParts/RelatedProducts/RelatedProducts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        <BrowserRouter>
          <Route path="/autoPartsStore" render={() => <AutoPartsCatalog />} />
          <Route path="/relatedProducts" render={() => <RelatedProducts />} />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;
