import React from 'react'
import DirectoryCard from './Directory'
const uuid = require('uuid');

function DirectoriesCard({ directories, deleteDirectory })
{
    return (
        <>
            {directories.map(dir =>
               
            (
                <DirectoryCard
                    key={uuid.v4()}
                    directoryName={dir}
                    deleteDirectory={deleteDirectory}
                />
            ))}
        </>

    )
}

export default DirectoriesCard
