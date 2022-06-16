import React, { useState,useEffect } from 'react'
import '../styles/directoryForm.css'

function DirectoryForm({ formContent, formTitle, submit })
{
    const [directoryName, setDirectoryName] = useState(formContent.directoryName)
    const [oldDirectoryName, setoldDirectoryName] = useState()

    useEffect(()=>
    {
        setoldDirectoryName(directoryName)
    },[])


    return (
        <div className='directoryFormContainer'>
            <div><h2 className="formTitle">{formTitle}</h2></div>
            <form onSubmit={async (e) => 
            {
                console.log(directoryName);
                submit(e, directoryName, oldDirectoryName)
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
