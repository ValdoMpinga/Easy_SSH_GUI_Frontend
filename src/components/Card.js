import '../styles/card.css'
import { React, useState, useEffect } from 'react'
import axios from 'axios';

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Card = (props) =>
{
    const [hosts, setHosts] = useState([])

    useEffect(() =>
    {
        axios.get('http://localhost:3001/connections/get')
            .then(res =>
            {
                setHosts(res.data)
            })
            .catch(err =>
            {
                console.log(err);
            })
    }, [])
    return (
        <>
            {hosts.map(host => (
                <div
                    key={host._id}
                    className='card'>
                    <div className='cardDecoration'></div>
                    <p className='cardTitle'>{host.connectionName}</p>
                    <FaEdit
                    className='editIcon'
                        fill='#FFD24C'
                        size={30} />
                    <AiFillDelete
                        className='deleteIcon'
                        fill='#FFD24C'
                        size={30} />
                </div>
            ))}
        </>
    )
}

export default Card
