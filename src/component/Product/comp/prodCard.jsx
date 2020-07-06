import React from "react"

function ProdCard(props){
    return(<div class="card" style={{ width: '18rem' }}>
    <img class="card-img-top" src={props.ProductImage} alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title">{props.ProductName}</h5>
    <p class="card-text">{props.ProductPrice}</p>
      {/* <a href="#Cart" class="btn btn-primary">Buy</a> */}
    </div>
  </div>
  )
}

export default ProdCard