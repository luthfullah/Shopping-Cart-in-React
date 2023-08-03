import React from 'react'
import './Product.css'
// import images from './Images/pic1.jpg'

const Product = ({ product, onAddToCart }) => {
    return (
      
      <article style={{marginLeft: '5px', display: 'inline-block', marginBottom: '5px'}} className="br2 ba dark-gray shadow1 b--black-10  w-100 w-50-m w-25-l center btn ">
      <img src={product.images} className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." width="600px" height="100px" />
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h1 className="f5 f4-ns mv0">{product.name}</h1>
          </div>
          <div className="dtc tr">
            <h2 className="f5 mv0">{product.price}</h2>
          </div>
        </div>
        <p className="f6 lh-copy measure mt2 mid-gray">
          {product.description}
        </p>
        <button onClick={()=> onAddToCart(product)}> Add to cart</button>
      </div>
    </article>


     
    

    );
  };

export default Product