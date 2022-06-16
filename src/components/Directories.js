import React from 'react'
import DirectoryCard from './Directory'
const uuid = require('uuid');

function DirectoriesCard({ directories, deleteDirectory, editDirectory, openDirectory })
{
    return (
        <>
            {directories.map(dir =>
            (
                <DirectoryCard
                    key={uuid.v4()}
                    directoryName={dir}
                    deleteDirectory={deleteDirectory}
                    editDirectory={editDirectory}
                    openDirectory={openDirectory}
                />
            ))}
        </>

    )
}

export default DirectoriesCard
