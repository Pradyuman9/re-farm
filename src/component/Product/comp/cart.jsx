import React, { Component } from 'react'
import BananaIMg from "./../../images/Banana.jpg"
import {Link, Route, Router, useParams} from "react-router-dom"
import Axios from 'axios'

export default class cart extends Component {


    render(props){
    var CartDetails = null
   let cartItems = this.props.cartItems
   
   if(cartItems.length===0){
    //  console.log(cartItems.length)
     CartDetails=<div className="cart cart-header">Cart is empty</div>
   }
   else if(cartItems.length){
     CartDetails=
     <div>
        <div className="cart cart-header">
           You have {cartItems.length} Product in the cart{" "} 
        </div>
        <div className="cart">
            <ul className="cart-items">
           { console.log(cartItems)}
              {cartItems.map((item)=>(
                <li key = {item.Product_Id}>
                    <div>
                      <img src={item.Product_Image_url} alt={item.Product_name}></img>
                    </div>
                    <div>
                      <div>{item.Product_name}</div>
                      <div className="right">
                        {item.Price*item.Product_Qty}
                        <hr/>
                        {item.Product_Qty} Items
                        <button
                          className="button"
                          onClick={() => this.props.removeFromCart(item)}
                        >Remove</button>
                      </div>  
                    </div>
                </li>
              ))}
            </ul>
        </div>
        <div className="cart">
                <div className="total">
                    <div>
                        Total:{""}
                       {cartItems.reduce((a,c)=>a+(c.Price*c.Product_Qty),0)} 
                    </div>
                </div>
                <button className="button primary"><Link to={`/billing`}>Proceed</Link></button>
        </div>
     </div>
   }
        return (
            <div>
                {CartDetails}
            </div>
        )
    }
}
