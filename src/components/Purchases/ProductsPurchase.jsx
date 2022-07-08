import React from 'react'

const ProductsPurchase = ({product}) => {

  return (
    <article className='product-purchase'>
        <h4>{product.title}</h4>
        <p>Quantity: {product.productsInCart.quantity} </p>
        <p>$ {product.price} </p>
    </article>
  )
}

export default ProductsPurchase