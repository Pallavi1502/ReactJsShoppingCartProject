import React from 'react'
import "./Spinner.css"

function Spinner() {
  return (
    <div className='h-full w-full grid grid-cols-1 grid-rows-1 place-items-center'>
      <div  className='spinner '> </div>
    </div>
  )
}

export default Spinner;
