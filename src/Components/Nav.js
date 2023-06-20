import React from 'react'

const Nav = (props)=> {
  return (
    <>
    <nav className='nav'>
        <h1>{props.title}</h1>
        <button  className='button'>Dark Mode</button>
    </nav>
    </>
  )
}

export default Nav
