import React from "react"
import ProdDetails from './ProdDetails'
import ProdCard from './prodCard';
import prodImg from "./../../images/prod-img.jpg"
import ItemType from './../../images/ItemType.jpg'

function GetCard(details){
  return(<ProdCard 
      key={details.id}
      ProductImage={details.ProductImage}
      ProductName={details.ProductName}
      ProductPrice={details.ProductPrice}

  />)
}
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
            <img src={ItemType} alt="ItemType" width="95%" height="800px"/>
            </div> 
            <div className="dd">
              {ProdDetails.map(GetCard)}    
            </div>
          </div>  
         </div>)
}

export default Content;