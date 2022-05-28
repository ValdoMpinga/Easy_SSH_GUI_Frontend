import React, { useState } from 'react'
import '../styles/directoryForm.css'

function DirectoryForm({ formTitle, submit})
{
    const [directoryName, setDirectoryName] = useState('')

    return (
        <div className='directoryFormContainer'>
            <div><h2 className="formTitle">{formTitle}</h2></div>
            <form onSubmit={async (e) => 
            {
                console.log(directoryName);
                submit(e,directoryName)
            }}>


                <div className="mb-3">
                    <label className="form-label">directoryName</label>
                    <input
                        type="text"
                        required={true}
                        placeholder='Directory name'
                        className="form-control"
                        value={directoryName}
                        onChange={(e) => setDirectoryName(e.target.value)}
                    />

                    <div className='buttonContainer'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DirectoryForm
