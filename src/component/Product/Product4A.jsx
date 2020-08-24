import React, { Component } from 'react'
import Header from './comp/Header'
import Footer from './comp/Footer'
import data from './comp/Data'
import BananaIMg from "./../images/Banana.jpg"
import refarm from './../images/re-farm.png'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    browserHistory
  } from "react-router-dom";

export default class Product4A extends Component {
    state={
        products:[]
      }
      
      componentDidMount(){
      axios.get(`https://asia-east2-refarm.cloudfunctions.net/products_by_id?pid=${this.props.match.params.id}`)
      .then(res=>{
        const products=res.data.Products
        this.setState({products})
      })
      }
      render() {
        const Product = this.state.products
        // const Product = data[0]
        // console.log(this.state.products)
        console.log(Product)
        return (
            <div>
            <Header></Header>
            <div >
            <ul className="Top-Head">
                <li className="logoImg">
                  <img src={refarm} alt="Refarm"/>
            <Link to={'/'}><h5>Home</h5></Link>
            <h5>Catalog</h5>
                 </li>
            </ul> 
      <div className="Buying">
      <div className="ProductImg">
      <img src={Product.Product_Image_Url} alt="bananaimg"/>
      </div>
      <div className="details">
      <h1 className="ProductName">{Product.Product_Name}</h1>
      <h4 className="Price">{Product.Price}</h4>
            <ul>
                <li>
                <a className="AddCart"><h5>Add to Cart</h5></a>
                </li>
                <li>
                Quantity:<select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
                </li>
                <li>
                <a className="BuyNow"><h5>Buy Now</h5></a>  
                </li>
            </ul>
      </div>
      </div>
      </div>
         <Footer></Footer>
        </div>
        )
    }
}








