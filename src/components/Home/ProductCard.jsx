import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import getConfig from '../../utils/getConfig.js'

const ProductCard = ({product}) => {


    const navigate = useNavigate()

    const goToProductId = () => {
        navigate(`/product/${product?.id}`)
    }

    const addCartProductId = () =>{

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        const objProductId = {
            "id": product.id,
            "quantity": 1
        }
        axios.post(URL,objProductId, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err.data))
    }

  return (
    <article onClick={goToProductId} className='card-product'>
        <header className='card-product__header'>
            <img className='card-product__img-back' src={product?.productImgs[1]} alt="Product" />
            <img className='card-product__img' src={product?.productImgs[0]} alt="Product" />
        </header>
        <div className="card-product__body">
            <h2 className="card-product__title">
                {product?.title}
            </h2>
            <div className='card-product__price-container'>
                <h3 className='card-product__price-label'>Price</h3>
                <p className='card-product__price-number'>$ {product?.price} </p>
            </div>
            <button onClick={addCartProductId} className='card-product__btn'>
                <i className='bx bx-cart-add'></i>
            </button>
        </div>
    </article>
  )
}

export default ProductCard