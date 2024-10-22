import React, { Component } from 'react'
import BananaIMg from "./../../images/Banana.jpg"
import {Link, Route, Router, useParams} from "react-router-dom"


export default class cart extends Component {
  constructor(props){
    super(props)
  
    this.state={
      isloggedIn:''
    }

  }
    render(props){
    var CartDetails = null
   let cartItems = this.props.cartItems
      

   if(!localStorage.getItem('uid')){
    CartDetails=<div className="cart cart-header">You are not logged In</div>
   }else{
    
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
                          Rs {item.Price*item.Product_Qty}
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
                         Rs {cartItems.reduce((a,c)=>a+(c.Price*c.Product_Qty),0)} 
                      </div>
                  </div>
                  <button className="button primary"><Link to={{pathname:`/billing`,state:{
                    CartDetail:cartItems,
                  }}}>Proceed</Link></button>
          </div>
       </div>
     }
   }
  
        return (
            <div>
                {CartDetails}
            </div>
        )
    }
}
