import React from 'react'
import './style/cartScreen.css'
import axios from 'axios'
import getConfig from '../../utils/getConfig'

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

  return (
    <div>
      <button onClick={postPurchase}><h2>Post Purchases</h2></button>
    </div>
  )
}

export default CartScreen