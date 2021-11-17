import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Logo from './components/Logo';
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
import UsedInventory from './components/UsedInventory';
import TradeIn from './components/TradeIn';
import Drive from './components/Drive';
import CyberTruck from './components/CyberTruck';
import RoadSter from './components/RoadSter';
import Semi from './components/Semi';
import Charging from './components/Charging';
import Powerwall from './components/PowerWall';
import Commercial from './components/Commercial';
import Utilities from './components/Utilities';
import FindUs from './components/FindUs';
import Support from './components/Support';
import Invenstor from './components/Invenstor';



const App = () => {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path='/'>  
      <Logo />   
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

          <Route path='/inventory/new' component={NewInventory} />
          <Route path='/inventory/used' component={UsedInventory} />
          <Route path='/tradein' component={TradeIn} />
          <Route path='/drive' component={Drive} />
          <Route path='/cybertruck' component={CyberTruck} />
          <Route path='/roadster' component={RoadSter} />
          <Route path='/semi' component={Semi} />
          <Route path='/charging' component={Charging} />
          <Route path='/powerwall' component={Powerwall} />
          <Route path='/commercial' component={Commercial} />
          <Route path='/utilities' component={Utilities} />
          <Route path='/googlemaps' component={FindUs} />
          <Route path='/support' component={Support} />
          <Route path='/tab-quarterly-disclosure' component={Invenstor} />

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


