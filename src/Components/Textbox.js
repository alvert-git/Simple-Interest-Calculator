import React from 'react'

const Textbox = (props) => {
  return (
    <>
      <label htmlFor={props.Name}>{props.Name}</label>
    <input onChange={(event)=>{props.val(event.target.value)}} name="name" className='box' type="number" />
    <br/>
    </>
  )
}

export  default Textbox
