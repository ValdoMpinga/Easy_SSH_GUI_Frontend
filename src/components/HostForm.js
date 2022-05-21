import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../styles/hostForm.css'

function HostForm({ submit })
{
    const [ip, setIp] = useState('')
    const [hostName, setHostname] = useState('')
    const [hostNickname, setHostNickname] = useState('')

    return (
        <div className='hostFormContainer'
        >
            <div><h2 className="formTitle">Add a Host</h2></div>

            <div className='formSubContainer'>
                <form onSubmit={(e) =>
                {
                   let hostInput =
                    {
                        hostName: hostName,
                        ip: ip,
                       hostNickname: hostNickname,
                    }

                    submit(e, hostInput)
                }}>

                    
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">IP</label>
                        <input
                            type="text"
                            required="true"
                            placeholder='IP address'
                            class="form-control"
                            pattern='[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}'
                            title="Please enter a valid IP, example: 127.0.0.1"
                            value={ip}
                            onChange={(e) => setIp(e.target.value)}
                        />
                    </div>
                    
                    <div class="mb-3">
                        <label for="hostName" class="form-label">Login</label>
                        <input
                            type="text"
                            required="true"
                            placeholder='Login'
                            class="form-control"
                            value={hostNickname}
                            onChange={(e) => setHostNickname(e.target.value)}
                        />
                    </div>

                    <div class="mb-3">
                        <label for="hostNickname" class="form-label">Host name</label>
                        <input type="text"
                            required="true"
                            placeholder="Your custom host name" class="form-control input-sm" aria-describedby="emailHelp"
                            value={hostName}
                            onChange={(e) => setHostname(e.target.value)}
                        />

                    </div>



               

                    <div className='buttonContainer'>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default HostForm
