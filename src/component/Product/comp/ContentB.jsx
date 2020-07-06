import React from 'react'
import refarm from './../../images/re-farm.png'
import banana from './../../images/Banana.jpg'
import { Button } from 'react-bootstrap'


function ContentB(){
    return(
        <div>
            <ul className="Top-Head">
             <li className="logoImg">
              <img src={refarm} alt="Refarm"/>
							<h5>Home</h5>
							<h5>Catalog</h5>
    	       </li>
            </ul>
            <div className="CartHeading">
							<h1>YOUR CART</h1>
							<a href="#Product4">Continue Shopping</a>
            </div> 
						<div>
							<ul className="divisions">
								<li><h6 className="Product">PRODUCT</h6></li>
								<li><h6 className="Price">PRICE</h6></li>
								<li><h6 clasName="Quantity">QUANTITY</h6></li>
								<li><h6 className="Total">TOTAL</h6></li>
							</ul>
						</div>
							<hr></hr>
							<div className="Productdetails">
								<img src={banana} alt=""/>
								<a href="#Remove">Remove</a>
								<p className="PriceValue">Rs 75.00</p>
								<p className="QuantityValue">3</p>
								<p className="TotalValue">{75*3}</p>
							</div>
							<hr></hr>
							<div className="EndScreen4B">
									<div className="first" >
										<p>SubTotal</p>
										<p> Rs.225.00</p>
									</div>
									<div className="Second">
										<p>
											Taxes and shipping calculated at Checkout
										</p>
									</div>
									<button className="CheckOutBoutton">
											Check Out
									</button>
								</div>
        </div>
    )
}

export default ContentB;