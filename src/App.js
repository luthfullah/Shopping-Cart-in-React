import React, { useState } from 'react';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
// import { Route, Routes} from "react-router-dom"


import 'tachyons'



const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1' ,price: '$100', images: require('./Images/pic1.jpg') },
    { id: 2, name: 'Product 2', description: 'Description 2' ,price: '$50', images: require('./Images/pic2.jpg') },
    { id: 3, name: 'Product 3', description: 'Description 3' ,price: '$150' , images: require('./Images/pic3.jpg')},
    { id: 4, name: 'Product 4', description: 'Description 4' ,price: '$104', images: require('./Images/pic6.jpg') },
    { id: 5, name: 'Product 5', description: 'Description 5' ,price: '$200', images: require('./Images/pic5.jpg') },
    { id: 6, name: 'Product 6', description: 'Description 6' ,price: '$50', images: require('./Images/pic6.jpg') },
    // Add more products here
  ];

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (



    
      
    
    <div>
     

      <h1>Product List</h1>
      {/* <img src={pic} width='120px' height='100px'/> */}
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
      <ShoppingCart cartItems={cartItems} />
    
    </div>
    
  );
};

export default App;