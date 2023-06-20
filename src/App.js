import React, { useState } from 'react'
import Nav from './Components/Nav';
import Textbox from './Components/Textbox';

const App = () => {
  const [principle , setPrinciple] = useState(0);
  const [ rate , setRate] = useState(0);
  const [ time, setTime] = useState(0);
  const [si, setSi] = useState(0);
  

  const Calculate = ()=>{
    setSi(principle*rate*time/100);
  }
  return(
      <>
      <Nav title = "Simple Interest Calculator"/>
      <Textbox val = {setPrinciple} Name = " Principle :" />
      <Textbox val = {setRate} Name = " Rate :  " />
      <Textbox val = {setTime} Name = " Time :" />

      <button onClick={Calculate} className='button1'>Calculate SI</button>

      <h3>The value of SI is : {si} </h3>
      </>
  )
  
}

export default App;
