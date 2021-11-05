import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ModelS from './components/ModelS';
import Model3 from './components/Model3';
import ModelX from './components/ModelX';
import ModelY from './components/ModelY';
import ModelSDesign from './components/designs/ModelSDesign';
import Model3Design from './components/designs/Model3Design';
import ModelXDesign from './components/designs/ModelXDesign';
import ModelYDesign from './components/designs/ModelYDesign';
import SolarRoof from './components/SolarRoof';
import SolarPanels from './components/SolarPanels';
import EnergyDesign from './components/designs/EnergyDesign'
import Shop from './components/Shop'
import Account from './components/Account';
import NewInventory from './components/NewInventory';

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

          <Route path='/shop' component={Shop} />
          <Route path='/account' component={Account} />

          

          <Route path='/energy/design' component={EnergyDesign} />
          <Route path='/modelSDesign' component={ModelSDesign} />
          <Route path='/model3Design' component={Model3Design} />
          <Route path='/modelXDesign' component={ModelXDesign} />
          <Route path='/modelYDesign' component={ModelYDesign} />

          <Route path='/inventory/new' component={NewInventory} />

          {/* <Route path='/models/design' component={ModelSDesign} /> */}
          {/* <Route path='/model3/design' component={Model3Design} /> */}
          {/* <Route path='/modelx/design' component={ModelXDesign} /> */}
          {/* <Route path='/modely/design' component={ModelYDesign} /> */}
      </Switch>
      </div>
    </Router>
  );
}

export default App;


