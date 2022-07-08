import React, { useState } from 'react'
import './style/cartScreen.css'
import axios from 'axios'
import getConfig from '../../utils/getConfig'
import { useSelector } from 'react-redux'
import CartInfo from './CartInfo'

const CartScreen = () => {

  const postPurchase = () => {

    const objPurchase = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    axios.post(URL, objPurchase, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))
  }

  const [totalPay, setTotalPay] = useState(0)

  const cart = useSelector(state => state.cart)
  return (
    <div className='cart-home'>
          <h2>My Cart</h2>
      <div className="cart-home__container">
        {
          cart?.map(productCart => (
            <CartInfo key={productCart.id} productCart={productCart} />
          ))
        }
      </div>
      <h2>Total to pay: ${totalPay} </h2>
      <button className='filter-form__btn cart' onClick={postPurchase}>
        <h2>Confirm Purchases</h2>
      </button>
    </div>
  )
}

export default CartScreen