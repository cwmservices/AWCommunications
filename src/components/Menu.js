import React from 'react';

function Menu() {
  return (
   <>
   <div className="bg-dark" style={{'display':'flex','justifyContent':'space-around','padding':'15px'}}>
   <h1 style={{'color':'white','font-family':'arial'}}>AW Communications</h1>
    <button className="btn btn-danger"><i class="fas fa-cart-plus"></i>Cart Menu</button>
   </div>
   </>
  );
}

export default Menu;
