import React from 'react';

import './App.css';
import { LaunchList } from './components/Launch';
import { MissionInfoDeatilsList } from './components/LaunchDetails';
import {BrowserRouter as Router,Route,} from "react-router-dom";
//import swDev from './swDev'
function App() {

 
  

  return (
    <div>
      <Router>
          <Route exact path="/" component={LaunchList} />
          <Route  path="/details" component={MissionInfoDeatilsList} />
     </Router>
    </div>
  );
}

export default App;
//swDev();