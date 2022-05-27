import React from 'react'
import '../styles/directoryCard.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const uuid = require('uuid');

function DirectoryCard({ title, kety })
{
  return (
    <div
      className="directoryContainer"
      >
      <h3 className="cardTitle">{title}</h3>
      <div className='iconButtonsContainer'>
        <IconButton
          onClick={(e) =>
          {
            e.stopPropagation()
          }}
          color="primary"
          aria-label="upload picture"
          component="span">
          <EditIcon />
        </IconButton>

        <IconButton
          onClick={(e) =>
          {
            e.stopPropagation()
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
