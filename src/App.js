import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// const App = () => {
//   return (
//     <div>
//     <Router>
//     <Header />
//     <Switch>
//      <Route exact path='/'> 
//     <Home />
//      </Route>
//      <Route path='/models' component={} />
//      <Route path='/solarroof' component={} />
//      <Route path='/solarpanels' component={} />
//     <div className="App">
//     </Switch>
//     </Router>
//     </div>
//   );
// }

const App = () => {
  return (
    <div className="App">
    <Header />
    <Home />
    </div>
  );
}

export default App;
