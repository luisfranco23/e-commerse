import React, { useState } from 'react'
import axios from 'axios'
import getConfig from '../../utils/getConfig'
import { useDispatch } from  'react-redux'
import { getAllProductCart } from '../../store/slices/cart.slice.js'

const ProductInfoId = ({product}) => {

    const [count, setCount] = useState(1)
    const dispatch = useDispatch()

    const addToCart = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

        const addProduct = {
            id: product.id,
            quantity: count
        }

        axios.post(URL,addProduct,getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductCart())
            })  
            .catch(err => console.log(err.data))      
    }

    const minusOne = () =>{
        const minus = count - 1
        minus >= 1 &&   setCount(minus)
    }

    const plusOne = () => setCount(count + 1)

  return (
    <article className='product-info'>
        <h2 className="product-info__title">
            {product?.title}
        </h2>
        <p className="product-info__description">
            {product?.description}
        </p>
        <div className='product-info__container'>
            <div className='card-product__price-container'>
                <h3 className='card-product__price-label product-info__label'>Price</h3>
                <p className='card-product__price-number product-info__number'>$ {product?.price} </p>
            </div>
            <div className="product-quantity">
                <h2 className='card-product__price-label product-info__label'>Quantity</h2>
                <div className='product-info__quantity-container'>
                    <div onClick={minusOne} className="product-info__minus">-</div>
                    <div className="product-info__count">{count}</div>
                    <div onClick={plusOne} className="product-info__plus">+</div>
                </div>
            </div>
        </div>
        <button onClick={addToCart} className='product-info__btn'>Add to Cart <i className='bx bxs-cart-add'></i></button>
    </article>
  )
}

export default ProductInfoId