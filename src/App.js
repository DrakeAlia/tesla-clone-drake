import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ModelS from './components/ModelS';
import Model3 from './components/Model3';
import ModelX from './components/ModelX';
import ModelY from './components/ModelY';
import SolarRoof from './components/SolarRoof';
import SolarPanels from './components/SolarPanels';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
     <div className="App">
     <Switch>
      <Route exact path='/'> 
    <Header />
    <Home />
      </Route>
      <Route path='/models' component={ModelS} />
      <Route path='/model3' component={Model3} />
      <Route path='/modelx' component={ModelX} />
      <Route path='/modely' component={ModelY} />
      <Route path='/solarroof' component={SolarRoof} />
      <Route path='/solarpanels' component={SolarPanels} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;




// return (
//   <Router>
//     <div className='app'>
//       <Switch>
//         <Route exact path='/'>
//           <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
//           {isMenuOpen && <Menu />}
//           <HeaderBlock />
//         </Route>
//         <Route exact path='/login'>
//           {user ? <Redirect to='/teslaaccount' /> : <Login />}
//         </Route>
//         <Route exact path='/signup'>
//           <Signup />
//         </Route>
//         <Route exact path='/teslaaccount'>
//           {!user ? (
//             <Redirect to='/login' />
//           ) : (
//             <>
//               <TeslaAccount
//                 isMenuOpen={isMenuOpen}
//                 setIsMenuOpen={setIsMenuOpen}
//               />
//               {isMenuOpen && <Menu />}
//             </>
//           )}
//         </Route>
//       </Switch>
//     </div>
//   </Router>
// )

