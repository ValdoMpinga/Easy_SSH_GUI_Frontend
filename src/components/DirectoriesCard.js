import React from 'react'
import DirectoryCard from './DirectoryCard'
const uuid = require('uuid');

function DirectoriesCard({ directories })
{
    return (
        <>
            {directories.map(dir =>
               
            (
                <DirectoryCard
                    key={uuid.v4()}
                    title={dir}
                />
            ))}
        </>

    )
}

export default DirectoriesCard
