import React from 'react'
import refarm from './../../images/re-farm.png'
import banana from './../../images/Banana.jpg'

function contentA(){
    return(
    <div >
            <ul className="Top-Head">
                <li className="logoImg">
                  <img src={refarm} alt="Refarm"/>
									<h5>Home</h5>
									<h5>Catalog</h5>
		             </li>
            </ul> 
					<div className="Buying">
							<div className="ProductImg">
								<img src={banana} alt="bananaimg"/>
							</div>
							<div className="details">
								<h1 className="ProductName">Banana</h1>
								<h4 className="Price">Rs. 25/Kg</h4>
								<button className="AddCart"><h5>Add to Cart</h5></button>
								<button className="BuyNow"><h5>Buy Now</h5></button>
							</div>
					</div>  
    </div>
    )
}

export default contentA;