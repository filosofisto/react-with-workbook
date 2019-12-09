import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import HorsesScreen from "./screens/HorsesScreen";
import VoltmeterScreen from "./screens/VoltmeterScreen";
import GeeseScreen from "./screens/GeeseScreen";
import OfflineScreen from "./screens/OfflineScreen";
import Page404Screen from "./screens/Page404Screen";

function App() {
  return (
      <Router>
          <div>
              <header>
                  <h1>Photo blog</h1>
              </header>
              <main>
                  <Switch>
                      <Route exact path='/' component={HomeScreen} />
                      <Route path='/horses' component={HorsesScreen} />
                      <Route path='/voltmeter' component={VoltmeterScreen} />
                      <Route path='/geese' component={GeeseScreen} />
                      <Route path='/offline' component={OfflineScreen} />
                      <Route path='/404' component={Page404Screen} />
                  </Switch>
              </main>
          </div>
      </Router>
  );
}

export default App;
