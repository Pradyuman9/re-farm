
import React from 'react'
import Header from './comp/Header'
import Footer from './comp/Footer'
import {Link, Route, Router, useParams} from "react-router-dom"
import prodImg from "./../images/prod-img.jpg"
import imageType from "./../images/ItemType.jpg"
import { useState,useEffect } from 'react'
import axios from 'axios'
import ProdDetails from './comp/Data'


function Product4(props){
  const {id} = useParams()
  const url ='https://us-central1-refarm.cloudfunctions.net/display_allProducts'
  const [products,setProducts]=useState({
      loading:false,
      data:null,
      error:false
  })

    useEffect(() => {
        setProducts({
            loading:true,
            data:null,
            error:false
        })
        axios.get(url)
        .then(response=>{
            setProducts({
                loading:false,
                data:response.data,
                error:false
            })
        })
        .catch(()=>{
            setProducts({
                loading:false,
            data:null,
            error:false
            })
        })
    }, [url])
  let content =null;

  function addToCart(details){
    console.log(details.Product_ID)
  }

  if(products.error){
      content=<p>
          There was some error please try again later
      </p>
  }
  if(products.loading){
      content=<p>loading</p>
  }
  if(products.data){
    console.log(products.data.Products)
    var arr=products.data.Products
      content=<div className="bodyCon">
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
        <div className="ItemType">
        <img src={imageType} alt="ItemType" width="95%" height="800px"/>
        </div> 
        <div className="dd">
          
        {arr.map(details=><div key ={details.Product_ID} className="card" style={{ width: '18rem' }}>
              <Link to={`/products/${details.Product_ID}`}>
              <img className="card-img-top" src={details.Product_Image_Url} alt="Card cap"/>
              </Link>
  <div className="card-body">
    <h5 className="card-title">{details.Product_Name}</h5>
  <p className="card-text">{details.Price}</p>
  <ul className="product-add-Details">
  <li className="Quantity">
                Quantity:<select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                </select>
                </li>
    <li className="add-to-cart">
    <button onClick={addToCart(details)} className="btn btn-primary">Add to Cart</button>
    </li>
  </ul>
  </div>
</div>)}
        </div>
      </div>  
     </div>
  }
  return(
      <div>
          <Header></Header>
          {content}
          <Footer></Footer>
      </div>
  )
}

export default Product4;


state={
  products:[]
}
componentDidMount(){
axios.get('https://us-central1-refarm.cloudfunctions.net/display_allProducts')
.then(res=>{
  const products=res.data.Products.Dals
  this.setState({products})
})
}
render() {
  const Product = Object.values(this.state.products).find(x=>x.Product_ID===this.props.match.params.id)
  console.log(this.state.products)
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
          <button className="AddCart"><h5>Add to Cart</h5></button>
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
          <button className="BuyNow"><h5>Buy Now</h5></button>  
          </li>
      </ul>
</div>
</div>
</div>
   <Footer></Footer>
  </div>

  // useEffect(()=>{
    //     fetchProduct();
    // },[])

    // const [products,setProducts]=useState([]);
    // const fetchProduct = async ()=>{
    //     const data = await fetch('https://us-central1-refarm.cloudfunctions.net/display_allProducts');
    //     const products =  await data.json();
        
    //     setProducts(products);
    // }