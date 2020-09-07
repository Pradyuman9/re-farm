import React, { Component} from 'react'
import Header from './comp/Header'
import Footer from './comp/Footer'
import {Link} from "react-router-dom"
import prodImg from "./../images/prod-img.jpg"
import axios from 'axios'
import Cart from './comp/cart'
import SignIn from './comp/SignIn'


export default class Product4 extends Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state=
    {
      products:[],
      cartItems:[],
      value:'1',
      uId:''
      
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
componentDidMount(){
  axios.get('https://us-central1-refarm.cloudfunctions.net/display_allProducts')
  .then(res=>{
    const products=res.data.Products
    this.setState({products})
  })
  axios.get("https://us-central1-refarm.cloudfunctions.net/display_cart_items?accountkey=rgHAFFep9uP9p4jnOoR6ktZIlRs1")
    .then(res=>{
      const cartItems=res.data.Cartitems
      this.setState({cartItems})
     
    })
}

getUid=(data)=>{
  this.setState({uId:data})
}


removeFromCart=(product)=>{
  // const cartItems = this.state.cartItems;
  // this.setState({cartItems:cartItems.filter(x=>x.Product_ID!==product.Product_ID)})
  console.log(product)
  const url = "https://us-central1-refarm.cloudfunctions.net/subtraction_from_cart"
  axios.post(url,{accountkey:"rgHAFFep9uP9p4jnOoR6ktZIlRs1",
  id:product.Product_Id}).then(res=>{
    if(this.state.cartItems.length===1 &&product.Product_Qty===1)
      {
        const cartItems=[]
        this.setState({cartItems})
      }
    else{
      axios.get("https://us-central1-refarm.cloudfunctions.net/display_cart_items?accountkey=rgHAFFep9uP9p4jnOoR6ktZIlRs1")
    .then(res=>{
      const cartItems=res.data.Cartitems
      this.setState({cartItems})
    })
    } 
  })

}

addToCart=(product)=>{
    // const cartItems = this.state.cartItems.slice();
    // let alreadyIncart = false;
    // cartItems.forEach(item=>{
    //   if(item.Product_ID===product.Product_ID){
    //     item.count+=parseInt(this.state.value)
    //     alreadyIncart = true;
    //   }
    // });
    // if(!alreadyIncart){
    //   cartItems.push({...product,count:parseInt(this.state.value)});
    // }
    // const itemDetail = {
    //   accountkey:"rp3ZL4wz5Tezme44V87T70luPtw2",
    //   qty: this.state.value,
    //   id:product.Product_ID
    // }
    const url = "https://us-central1-refarm.cloudfunctions.net/add_to_cart"
    axios.post(url,{accountkey:"rgHAFFep9uP9p4jnOoR6ktZIlRs1",
    qty: this.state.value,
    id:product.Product_ID})
    .then(res=>{
      axios.get("https://us-central1-refarm.cloudfunctions.net/display_cart_items?accountkey=rgHAFFep9uP9p4jnOoR6ktZIlRs1")
    .then(res=>{
      const cartItems=res.data.Cartitems
      this.setState({cartItems})
    })
    }) 
}
  render(props){
    var arr =Object.values(this.state.products)

    return (
      <div>
        <Header returnUid = {this.getUid}></Header>
       
        <div className="bodyCon">
        <div className="Containor">
                  <img className="prodIMG" src={prodImg} alt="img" width="100%" height="150"/>
                  <div className="centered"><h1>PRODUCTS</h1></div>	
             </div>
         <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <a href="#sorty">Sort By</a>
            </li>
            <li className="breadcrumb-item active">
              Alpahbetically
            </li>
            <li className="numberProd">
              {arr.length} products
            </li>
          </ol>
         </div>
        <div className="ProdDisplay"> 
          <div className="dd">
            {console.log(this.state.products)}
            {console.log(this.state.cartItems.length)}
            {arr.map(product=><div key ={product.Product_ID} className="card" style={{ width: '18rem' }}>
              <Link to={`/products/${product.Product_ID}`}>
              <img className="card-img-top" src={product.Product_Image_Url} alt="Card cap"/>
              </Link>
  <div className="card-body">
    <h5 className="card-title">{product.Product_Name}</h5>
  <p className="card-text">{product.Price}</p>
  <ul className="product-add-Details">
  <li className="Quantity">
                Quantity:<select value={this.state.value} onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                </li>
    <li className="add-to-cart">
    <button onClick={()=>this.addToCart(product)} className="btn btn-primary">Add to Cart</button>
    </li>
  </ul> 
  </div>
</div>)}    
          </div>
          <div className="ItemType">
            <Cart cartItems = {this.state.cartItems} removeFromCart={this.removeFromCart} value = {this.state.value}></Cart>
          {/* {CartDetails} */}
          </div>
        </div>  
       </div>
       <Footer></Footer>
  {/* //Login-->
    /Register--> */}
    {/* </div> */}
  
      </div>
    )
  }
}











