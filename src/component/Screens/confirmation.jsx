import React, { Component , Fragment } from 'react';
import {BrowserRouter as Router ,Switch,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../CSS/confirmationstyle.css';
import Header from './comp/Header';
import Footer from './comp/Footer';
import Axios from 'axios';

class Confirmation extends Component {

  constructor(props){
    super(props)
    this.state={
      orderConfirmedDetails:[]
    }
  }
  componentDidMount(){
    const url ="https://us-central1-refarm.cloudfunctions.net/Order_Status";
  Axios.post(url,{order_stat:"fulfilled",
    orderid:this.props.location.state.Order_ID,
    orderpaymentstatus:this.props.location.state.Order_Payment_Status,
    deliveryaddress:this.props.location.state.address
  }).then(res=>{
    console.log(res.data)
    const orderConfirmedDetails = res.data;
    this.setState({orderConfirmedDetails})

    const URL = "https://us-central1-refarm.cloudfunctions.net/deletion_of_cart"
    Axios.post(URL,{accountkey:localStorage.getItem('uid')})
    .then(res=>{
      console.log(res)
    })
  })
  }

    render() {
      const cartItems = this.props.location.state.cartItems;
      const orderConfirmedDetails = this.state.orderConfirmedDetails;
        return(
  <Router>
          <Header></Header>
          <div className="hello">
              
          <div id="profile" class="offset" >
          <div class="fixed-background">
              <div class="row dark">
                  <div class="col-12" >
                  <div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      <h3 style={{textAlign:"left"}}>ORDER CONFIRMED</h3>
    </div>
    <br/><hr/><hr/>

    <div class="col col-lg-2">
        <h5 className="ordertot">Order Total:Rs {this.props.location.state.total}</h5>
    </div>
  </div>
  </div>             
                  </div>
              </div>
              </div>
              </div>
              <br/>
<div className="sat">
< div class="row no-gutters "  >
<div class="col no-gutters  " >
    <div class="leftside-1" >
        <div class="container-fluid"  >
            
            <div class="main">
            <h5> Order Information  :</h5>
            <br></br>
          <h6 className="OrderId">Receipt ID:{orderConfirmedDetails.Receipt_ID}</h6>
          <br></br>
        <h6 className="orderStatus">Order Status: {orderConfirmedDetails.Order_Status} </h6>
        <br></br>
        <h6 className="orderItmes">Items Orderd:</h6>
        <br></br>
        {cartItems.map((product)=>(
        <p key ={product.Product_Id}>
        <Link to={`/products/${product.Product_Id}`}>{product.Product_name}</Link>
          <span className="Price">Rs {product.Price} X {product.Product_Qty}</span></p>
      ))}
        </div>
        <br/>
        <br/>
        <div class="main">
            <h5> Payment Method</h5>
            <br></br>
            <h4>COD</h4>
        </div>
          </div>
    </div>
</div>
<div class="col no-gutters ">
    <div class="rightside" >
    <div class="container-fluid"  >
            
            <div class="main">
            <h5> Shipping Address  :</h5>
            <br></br>
        <h6 className="address">{orderConfirmedDetails.Delivery_Address}</h6>
        </div>
        <br/>
        <br/>
          </div>
</div>
</div>
</div>
</div>        
              </div>
              <Footer></Footer>
              </Router>
      )
    }
}

export default Confirmation;