import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FilterHome from './FilterHome'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'

const HomeScreen = () => {

  const products = useSelector( state => state.products)
  const [searchSubmit, setSearchSubmit] = useState()

  return (
    <div className='home'>
      <InputSearch setSearchSubmit={setSearchSubmit}/>
      <div className="home-body">
        <FilterHome />
        <div className="products-container">
          {
            searchSubmit ?
            searchSubmit.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
            :
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomeScreen