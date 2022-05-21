import React from 'react'
import '../styles/textInput.css'
function TextInput(props)
{
    return (
        <input
            className='textInput'
            type={props.type}
            placeholder={props.placeholder}
            width={props.width}
            height={props.height}  
        />
    )
}

export default TextInput
