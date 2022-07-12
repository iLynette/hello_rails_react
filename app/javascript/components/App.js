import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HelloWorld from './HelloWorld';
import store from "../configureStore";

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HelloWorld />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App
