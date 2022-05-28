import { React } from 'react'
import '../styles/host.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Host({ host, deleteHost, editHost, openHost })
{
    return (
        <div
            key={host._id}
            onClick={(e) =>
            {
                e.stopPropagation()
                openHost(host)
            }}
            className='card'>
            <div className='cardDecoration'></div>
            <div className='cardTextContainer'>
                <p className='cardTitle'>{host.connectionName}</p>
                <p className='cardIP'>{host.ip}</p>
            </div>
            <div>
                <IconButton
                    onClick={(e) =>
                    {
                        e.stopPropagation()
                        editHost(host)
                    }}
                    color="primary"
                    aria-label="upload picture"
                    component="span">
                    <EditIcon />
                </IconButton>
            </div>
            <IconButton
                onClick={(e) =>
                {
                    e.stopPropagation()
                    deleteHost(host._id)
                }}
                color="primary"
                aria-label="upload picture"
                component="span">
                <DeleteIcon
                    className='deleteIcon' />
            </IconButton>
        </div>
    )
}

export default Host
