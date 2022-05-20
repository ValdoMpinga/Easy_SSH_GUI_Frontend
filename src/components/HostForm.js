import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../styles/hostForm.css'

function HostForm()
{
    return (
        <div className='hostFormContainer'
        >
            <div><h2 className="formTitle">Add a server</h2></div>

            <div className='formSubContainer'>
                <form>
                    <div class="mb-3">
                        <label for="hostNickname" class="form-label">Server nickname</label>

                        <input type="text"

                            required="true"
                            placeholder="Your custom nickname" class="form-control input-sm" aria-describedby="emailHelp"
                        />

                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">IP</label>
                        <input
                            type="text"
                            required="true"
                            placeholder='
                    IP address' class="form-control"
                            pattern='[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}'
                            title="Please enter a valid IP, example: 127.0.0.1"
                            id="exampleInputPassword1" />
                    </div>


                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Port </label>
                        <input type="number" required="true" defaultValue={22} class="form-control" id="exampleInputPassword1" />
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
