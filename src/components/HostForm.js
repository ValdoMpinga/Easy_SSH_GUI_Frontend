import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../styles/hostForm.css'
import { SentimentDissatisfied } from '@mui/icons-material'

function HostForm({ submit, formTitle, formContent })
{
    const [ip, setIp] = useState(formContent.ip)
    const [login, setLogin] = useState(formContent.login)
    const [password, setPassword] = useState(formContent.password)
    const [connectionName, setConnectionName] = useState(formContent.connectionName)

    return (
        <div className='hostFormContainer'
        >
            <div><h2 className="formTitle">{formTitle}</h2></div>

            <div className='formSubContainer'>
                <form onSubmit={async (e) =>
                {
                   
                    let hostFormData =
                    {
                        ip: ip,
                        login: login,
                        password: password,
                        connectionName: connectionName,
                    }

                    await submit(e, hostFormData)
                   
                }}
                    
                >

                    <div className="mb-3">
                        <label className="form-label">IP</label>
                        <input
                            type="text"
                            required={true}
                            placeholder='IP address'
                            className="form-control"
                            pattern='[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}'
                            title="Please enter a valid IP, example: 127.0.0.1"
                            value={ip}
                            onChange={(e) => setIp(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Login</label>
                        <input
                            type="text"
                            required={true}
                            placeholder='Login'
                            className="form-control"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="hostName" className="form-label">Password</label>
                        <input
                            type="password"
                            required={true}
                            placeholder='password'
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="hostNickname" className="form-label">Host name</label>
                        <input type="text"
                            required={true}
                            placeholder="Your custom host name" className="form-control input-sm" aria-describedby="emailHelp"
                            value={connectionName}
                            onChange={(e) => setConnectionName(e.target.value)}
                        />
                    </div>



                    <div className='buttonContainer'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default HostForm
