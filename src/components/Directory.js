import React from 'react'
import '../styles/directory.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const uuid = require('uuid');

function DirectoryCard({ directoryName, deleteDirectory, editDirectory, openDirectory })
{
  return (
    <div
      className="directoryContainer"
      onClick={() =>
      {
        openDirectory(directoryName)
        
      }
      }
    >
      <div className='cardDecoration'></div>

      <div>
        <h3 className="carddirectoryName">{directoryName}</h3>
      </div>

      <div>
        <IconButton
          onClick={(e) =>
          {
            e.stopPropagation()
            editDirectory(directoryName)
          }}
          color="primary"
          aria-label="upload picture"
          component="span">
          <EditIcon />
        </IconButton>
      </div>
      <div>
        <IconButton
          onClick={(e) =>
          {
            e.stopPropagation()
            deleteDirectory(directoryName)
          }}
          color="primary"
          aria-label="upload picture"
          component="span">
          <DeleteIcon
            className='deleteIcon' />
        </IconButton>
      </div>
    </div>
  )
}

export default DirectoryCard
