import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import getConfig from '../../utils/getConfig'
import { useSelector } from 'react-redux'

const FilterHome = ({setSearchSubmit}) => {

   const {handleSubmit,reset,register} = useForm()

   const [category, setCategory] = useState()
   const products = useSelector( state => state.products)

   useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(URL, getConfig())
        .then(res => setCategory(res.data.data.categories))
        .catch(err => console.log(err))
   },[])

   const submit = data => {
    console.log(data)
    reset({
        form: '',
        to: ''  
    })
   }

   const filterCategory = e => {
    let value = (e.target.value)
    let filter = products.filter(e => e.category.name.includes(value))
    setSearchSubmit(filter)
   }

  return (
    <div className='filter-home'>
        <form className='filter-form' onSubmit={handleSubmit(submit)} >
            <h2 className="card-product__title filter__title">Price ▽</h2>
            <div className="filter-form__box">
                <label className='filter-form__label' htmlFor="form">From</label>
                <input className='form-home__input filter__input' type="text" id='form' {...register('form')} />
            </div>
            <div className="filter-form__box">
                <label className='filter-form__label' htmlFor="to">To</label>
                <input className='form-home__input filter__input' type="text" id='to' {...register('to')} />
            </div>
            <button className='filter-form__btn'>Filter price</button>
        </form>
        <div className="category">
        <h2 className='card-product__title filter__title'>Category</h2>
            {
                category?.map(e => (
                    <option className='card-product__option' onClick={filterCategory} key={e.id} value={e?.name}>{e?.name}</option>
                ))
            }
        </div>
    </div>
  )
}

export default FilterHome