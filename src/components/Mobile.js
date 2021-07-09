import React from 'react';
import iphonepromax from '../images/iphone12promax.png';
import iphone12pro from '../images/iphone12pro.png';
import iphone12promax from '../images/iphone12promax.png';

function Mobile() {
    return (
      <>
      <div className="container bg-light" style={{'marginTop':'30px','marginBottom':'30px','display':'flex','justifyContent':'space-around','flexWrap':'wrap','padding':'50px'}}>
      <div class="card" style={{'width': '18rem'}}>
  <img src={iphonepromax} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">iphone pro max</h5>
    <p class="card-text">This is the iphone pro max set you can buy and sell on AW Communications.</p>
    <a href="#" class="btn btn-danger">Add to Cart</a>
  </div>
</div>
        <div class="card" style={{'width': '18rem'}}>
  <img src={iphone12pro} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">iphone12 pro</h5>
    <p class="card-text">This is the iphone12 set that you can only buy and sell on AW Communications.</p>
    <a href="#" class="btn btn-danger">Add to Cart</a>
  </div>
</div>
        <div class="card" style={{'width': '18rem'}}>
  <img src={iphone12promax} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">iphone12 pro max</h5>
    <p class="card-text">This is the iphone12 pro max set you can buy and sell on AW Communications.</p>
    <a href="#" class="btn btn-danger">Add to Cart</a>
  </div>
</div>
      </div>
       
      </>
    );
  }
  
  export default Mobile;
  
