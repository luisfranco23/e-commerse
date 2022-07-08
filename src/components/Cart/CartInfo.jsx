import React from 'react'

const CartInfo = ({productCart}) => {

  return (
    <section className='cart-info'>
        <h3>{productCart?.title} </h3>
        <h4>{productCart?.brand} </h4>
        <p>Quantity: {productCart?.productsInCart.quantity} </p>
        <p>$ {productCart?.price} </p>
    </section>
  )
}

export default CartInfo