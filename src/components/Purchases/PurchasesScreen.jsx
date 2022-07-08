import React, { useEffect, useState } from 'react'
import axios from 'axios'
import getConfig from '../../utils/getConfig'

const PurchasesScreen = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL,getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  },[])

  return (
    <div>PurchasesScreen</div>
  )
}

export default PurchasesScreen