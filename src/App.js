import React, {Component} from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './component/Home/Home';
import Cart from './component/Cart/Cart'

class App extends Component {

  render(){
  return (
    <div className="App">
       <Router>
              <div>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/Cart">
                    <Cart />
                  </Route>
              </div>
            </Router>
                

    </div>
  );
}
}

export default App;
