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
            onClick={openHost}
            className='card'>
            <div className='cardDecoration'></div>
            <p className='cardTitle'>{host.connectionName}</p>
            {/* <FaEdit
                    className='editIcon'
                        fill='#FFD24C'
                        size={30} />
                    <AiFillDelete
                        className='deleteIcon'
                        fill='#FFD24C'
                        size={30} /> */}
            <div>
                <IconButton
                    onClick={(e) =>
                    {
                        e.stopPropagation()
                        editHost()
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
