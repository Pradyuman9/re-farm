import React, { Component } from 'react'
import Footer from './comp/Footer'
import Header from './comp/Header'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import './../CSS/checkOut.css'

export default class checkOutScreen extends Component {
constructor(props){
  super(props)
  this.state={
    orderDetails:[],
    orderConfirmedDetails:[],
    address:'',
    city:'',
    state:'',
    zip:''
    
  }
  this.onChange=this.onChange.bind(this);
}

componentDidMount(){
 const url ="https://us-central1-refarm.cloudfunctions.net/Order_Status"
 Axios.post(url,{ order_stat:"pending",
 accountid:localStorage.getItem('uid'),
 orderpaymentstatus:"pending"})
 .then(res=>{
   console.log(res.data)
  const orderDetails = res.data
  this.setState({orderDetails});
 })
}

// orderFulffiled=(details)=>{
//   const url ="https://us-central1-refarm.cloudfunctions.net/Order_Status";
//   Axios.post(url,{order_stat:"fulfilled",
//     orderid:details.Order_ID,
//     orderpaymentstatus:details.Order_Payment_Status,
//     deliveryaddress:this.state.address
//   }).then(res=>{
//     console.log(res.data)
//     const orderConfirmedDetails = res.data;
//     this.setState({orderConfirmedDetails})
//   })
// }

getUid=(data)=>{
  this.setState({uId:data})
}
onChange(e){

  this.setState({[e.target.name]:e.target.value})
 //  console.log(this.state)
}

    render() {
      const cartItems = this.props.location.state.CartDetail
      const total =cartItems.reduce((a,c)=>a+(c.Price*c.Product_Qty),0)
      var address = null
      address=this.state.address+' ,'+this.state.city+' , '+this.state.state+' , '+this.state.zip
      //console.log(address)
        return (
            <div>
                <Header></Header>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </head>
                <body>

<h2> Checkout Form</h2>
<div class="row">
  <div class="col-75">
    <div class="container1">
      <form action="/action_page.php">
      
        <div class="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"/>
            <label for="adr"><i  class="fa fa-address-card-o"></i> Address</label>
            <input  onChange={this.onChange} type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input  onChange={this.onChange} type="text" id="city" name="city" placeholder="New York"/>

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input  onChange={this.onChange} type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input  onChange={this.onChange} type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>

          {/* <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style={{"color":"navy"}}></i>
              <i class="fa fa-cc-amex" style={{"color":"blue"}}></i>
              <i class="fa fa-cc-mastercard" style={{"color":"red"}}></i>
              <i class="fa fa-cc-discover" style={{"color":"orange"}}></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div> */}
          
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
        </label>
      </form>
      <Link to ={{pathname:'/confirmation',state:{
                  cartItems:cartItems,
                  Order_ID:this.state.orderDetails.Order_ID,
                  Order_Payment_Status:this.state.orderDetails.Order_Payment_Status,
                  address:address,
                  total:total,
                }}}><button class="btn">Continue to checkout</button> </Link>
      {/* <button  onClick={()=>this.orderFulffiled(this.state.orderDetails)}  class="btn">Continue to checkout</button> */}
    </div>
  </div>
  <div class="col-25">
    <div class="container">
      <h4>Cart <span class="price" style={{"color":"black"}}><i class="fa fa-shopping-cart"></i> <b>{cartItems.length}</b></span></h4>
      {cartItems.map((product)=>(
        <p key ={product.Product_Id}>
<Link to={`/products/${product.Product_Id}`}>{product.Product_name}</Link>
<span class="price">Rs {product.Price} X {product.Product_Qty}</span></p>
      ))} 
      {/* <p><a href="1#">Product 1</a> <span class="price">$15</span></p>
      <p><a href="2#">Product 2</a> <span class="price">$5</span></p>
      <p><a href="3#">Product 3</a> <span class="price">$8</span></p>
      <p><a href="4#">Product 4</a> <span class="price">$2</span></p> */}
      <hr/>
      <p>Total:<span class="price" style={{"color":"black"}}><b>Rs {total}</b></span></p>
    </div>
  </div>
</div>
</body>
<Footer></Footer>
            </div>
        )
    }
}
