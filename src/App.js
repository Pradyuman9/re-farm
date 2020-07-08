

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  browserHistory
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from "./component/Product/Home"
import Product4 from './component/Product/Product4'
// eslint-disable-next-line
import Product4A from './component/Product/Product4A'
// eslint-disable-next-line
import Product4B from './component/Product/Product4B' 
// eslint-disable-next-line
import About from './component/Product/About'


function App() {
  return (
    <Router >
     <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/products" component={Product4} />
     <Route exact path="/about" component={About}></Route>
  <Route exact path="/products/id=:id" children={<Product4A></Product4A>}>{Product4A}</Route>
     </Switch>
    </Router>
    
  );
}

export default App;
  