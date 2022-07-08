import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './style/productScreen.css'
import ProductInfoId from './ProductInfoId'
import SimilarPoducts from './SimilarPoducts'

const ProductScreen = () => {

    const [product, setProduct] = useState()
    const {id} = useParams()

    useEffect(() => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
            .then(res => setProduct(res.data.data.product))
            .catch(err => console.log(err))
    },[id])

    const [indexClass, setIndexClass] = useState(0)
    const classImg = ['', 'secound-img', 'third-img']
    const clickPrev = () => {
        const prevClass = indexClass -1
        if(prevClass < 0) {
            setIndexClass(classImg.length - 1)
        }else {
            setIndexClass(prevClass)
        }
    }

    const clickNext = () => {
        const nextClass = indexClass +1
        if (nextClass >= classImg.length) {
            setIndexClass(0)
        }else{
            setIndexClass(nextClass)
        }
    }

  return (
    <div className='product'>
        <div className='product-header'>
            <div className="slider">
                <div onClick={clickPrev} className="slider__prev">&#60;</div>
                <div className={`slider__container ${classImg[indexClass]}`}>
                    {
                        product?.productImgs.map(imgSrc =>( 
                            <img className='slider__imgs' src={imgSrc} key={imgSrc} alt="img"/>
                        ))
                    }
                </div>
                <div onClick={clickNext} className="slider__next">&#62;</div>
                <div className='puntitos-container'>
                    <div onClick={() => setIndexClass(0)} className={indexClass == 0 ? 'puntitos puntitos__active' : 'puntitos'}></div>
                    <div onClick={() => setIndexClass(1)} className={indexClass == 1 ? 'puntitos puntitos__active' : 'puntitos'}></div>
                    <div onClick={() => setIndexClass(2)} className={indexClass == 2 ? 'puntitos puntitos__active' : 'puntitos'}></div>
                </div>
            </div>
            <ProductInfoId product={product} />
        </div>
        <SimilarPoducts product={product} />
    </div>
  )
}

export default ProductScreen