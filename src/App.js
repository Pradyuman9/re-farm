import React, { Component } from 'react'
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
import Home from "./component/Screens/Home"
import Product4 from './component/Screens/Product4'
// eslint-disable-next-line
import Product4A from './component/Screens/Product4A'
// eslint-disable-next-line
import Product4B from './component/Screens/Product4B' 
// eslint-disable-next-line
import About from './component/Screens/About'
import checkOutScreen from './component/Screens/checkOutScreen';
import Confirmation from './component/Screens/confirmation';
import Contact from './component/Screens/Contact';

export default class App extends Component {
  render(){
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/products" component={Product4}></Route> 
        <Route exact path="/products/:id" component={Product4A}></Route>
        <Route exact path = "/confirmation" component={Confirmation}></Route> 
        <Route exact path="/about" component={About}></Route>
        <Route exact path = '/contactUs' component={Contact}></Route>
        <Route exact path="/billing" component={checkOutScreen}></Route>
      </Switch>
    </Router>
    );
  }
}
  