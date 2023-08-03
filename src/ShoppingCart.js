import React from 'react'

const ShoppingCart = ({ cartItems }) => {
  const i= cartItems.length;
  const remove =()=>{
    const re= document.getElementById("rem")
    re.remove();
    
  }
    return (
      <div>
        <h2>Shopping Cart{i}</h2>
        <ul style={{display: 'flex' }}>
          {cartItems.map((item, index) => (
            <ul style={{ listStyle: "none" }} id='rem'>
              <li  key={index}>{item.name}</li>
              <li key={index}><img src={item.images} width="600px" height="100px" alt="image"/></li>
             <li > <button  key={index} onClick={ e=> remove()}>remove</button></li>
           </ul>
          ))}
        </ul>
      </div>
    );
  };

export default ShoppingCart