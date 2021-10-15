import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    // <Router>
    <div className="App">
    <Header />
    <Home />
    {/* </Router> */}
    </div>
  );
}

export default App;
