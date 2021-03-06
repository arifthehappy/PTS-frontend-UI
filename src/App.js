
import './App.css';
import Navbar from './components/dashboard/Navbar.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Component } from 'react';
import Home from './components/dashboard/Home'
import Events from './components/dashboard/Events'

class App extends Component {
  render() {
    return (
      <div>


        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/events" component={Events}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
