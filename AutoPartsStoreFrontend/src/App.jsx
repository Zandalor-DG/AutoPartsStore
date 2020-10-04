import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="mainClass">
      <Headers />
      <BrowserRouter>
        <Redirect from="/AutoPartsStore/" to="/" />
        <Route exact path="/" render={<AutoPartsStore />} />
        <Route
          path="/api/todoitem/:TodoListId"
          component={TodoItemsComponent}
        />
        <Route path="/ask" />
        <Route component={NotFoundPage} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
