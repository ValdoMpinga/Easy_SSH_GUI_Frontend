import {Reac,useState} from 'react'
import '../styles/button.css'



function Button(props)
{
  return (
      <button
          className='customButton'
          style={{
              background: props.backgroundColor,
              width: props.width,
              height: props.height,
              
          }}>
          {props.title}
      </button>
  )
}

export default Button
