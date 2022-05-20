import React from 'react'
import '../styles/alert.css'
import Button from './Button'
function Alert(props)
{
    return (
        <div className='container'
            style=
            {{
                background: props.cardBackgroundColor
            }}>
            <div className='cardHeader'
                style=
                {{
                    background: props.headerBackgroundColor
                }}
            >
                <p
                    className='headerTitle'
                    style={{ color: props.headerTitleColor }}>
                    {props.title}</p>
            </div>
            <p
                className='cardMessage'
                style={{ color: props.messageColor }}>{props.message}</p>
            <div
                className="alertButtonContainer">
            <Button
                backgroundColor={props.buttonBackgroundColor}
                width={props.buttonWidth}
                height={props.buttonHeight}
                title={props.buttonTitle}
                
            />
            </div>
        </div>
    )
}

export default Alert
