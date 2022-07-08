import React from 'react'

const UserLogged = () => {

  const singOff = () => {
    localStorage.removeItem('token')
    location.reload()
  }

  return (
    <article className='user-logged'>
        <i className='bx bxs-user-check'></i>
        <h2>User Logged</h2>
        <button  className='filter-form__btn logged' onClick={singOff}>Sing off</button>
    </article>
  )
}

export default UserLogged