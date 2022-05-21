import { React } from 'react'
import Host from './Host';
import '../styles/host.css'

const Hosts = ({ hosts, deleteHost, editHost, openHost }) =>
{
    return (
        <>
            {hosts.map(host =>
            (
                <Host
                    key={host._id}
                    host={host}
                    deleteHost={deleteHost}
                    editHost={editHost}
                    openHost={openHost}
                />
            ))}
        </>
    )
}
// console.log(host)
export default Hosts
