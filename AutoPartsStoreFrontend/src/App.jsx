import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        <Route path="/autoPartsStore" render={() => <BodyAutoParts />} />
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
