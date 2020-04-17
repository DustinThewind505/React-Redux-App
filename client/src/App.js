import React from 'react';

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import DogImg from "./components/DogImg"

import reducer from "./reducers/reducer"


const store = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Dog React App</h1>
        <p>Enjoy a random pic or video!</p>
        <DogImg />
      </div>
    </Provider>
  );
}

export default App;
