import React from "react"
import ProdDetails from './ProdDetails'
import {Link} from "react-router-dom"
import prodImg from "./../../images/prod-img.jpg"
import imageType from "./../../images/ItemType.jpg"

function Content(){
    return(
        <div className="bodyCon">
          <div className="Containor">
				    <img classsName="prodIMG" src={prodImg} alt="img" width="100%" height="150"/>
				    <div class="centered"><h1>PRODUCTS</h1></div>	
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
                {ProdDetails.length} products
              </li>
            </ol>
           </div>
          <div className="ProdDisplay">
            <div className="ItemType">
            <img src={imageType} alt="ItemType" width="95%" height="800px"/>
            </div> 
            <div className="dd">
              {ProdDetails.map(GetCard=>
              <div className="card" style={{ width: '18rem' }}>
                        <Link to= {'/products/id='+GetCard._id}>
                        <img className="card-img-top" src={GetCard.ProductImage} alt="Card cap"/>
                        </Link>
                      <div className="side">
                        <a href="#hi" className="text">Add to Cart</a>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{GetCard.ProductName}</h5>
                      <p className="card-text">{GetCard.ProductPrice}</p>
                        {/* <a href="#Cart" class="btn btn-primary">Buy</a> */}
                      </div>
                      </div>
                )}    
            </div>
          </div>  
         </div>)
}

export default Content;