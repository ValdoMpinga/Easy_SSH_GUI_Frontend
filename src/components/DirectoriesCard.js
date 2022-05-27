import React from 'react'
import DirectoryCard from './DirectoryCard'
const uuid = require('uuid');

var dirs = ['a', 'b', 'c']
function DirectoriesCard()
{
    return (
        <>
            {dirs.map(dir =>
            (
                <DirectoryCard
                    title={dir}
                />
            ))}
        </>

    )
}

export default DirectoriesCard
