import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

const InputSearch = ({setSearchSubmit}) => {

    const {handleSubmit,reset,register} = useForm()

    const products = useSelector(state => state.products)

    const submit = data => {
      const filter = products.filter(e => e.title.toLowerCase().includes(data.searchText.toLowerCase()))
      setSearchSubmit(filter)
        reset({
          searchText: ''
        })
    }

  return (
    <form className='form-home' onSubmit={handleSubmit(submit)}>
        <input className='form-home__input' placeholder='What are you looking for?' type="text" {...register('searchText')} />
        <button className='form-home__btn'><i className='bx bx-search'></i></button>
    </form>
  )
}

export default InputSearch