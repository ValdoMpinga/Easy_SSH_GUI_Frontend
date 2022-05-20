import React, { useState, useEffect, Alert } from 'react';
import './App.css';
import Hosts from './components/Hosts';
import Header from './components/Header';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Popup from 'reactjs-popup';
import HostForm from './components/HostForm';
import axios from 'axios';


function App()
{

  const [hosts, setHosts] = useState([])

  async function DeleteRequest(requestOptions)
  {
    try
    {
      await fetch(
        'http://localhost:3001/connections/delete', requestOptions)
        .then(response => response.text())
        .then(data =>{
          console.log("aaaaaaaa")
          console.log(data)
        
        })
    } catch (e)
    {
      console.log(e);
    }
  }

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


  const deleteHost = async (id) =>
  {
    console.log(id);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id })
    };

    let response = await DeleteRequest(requestOptions)

    if (response === "Host deleted")
    {
      setHosts(hosts.filter((host) =>
        host._id !== id
      ))
    } else
    {
      console.log(response);
    }
  }

  const editHost = (id) =>
  {
    console.log('ola');
  }

  const openHost = (id) =>
  {
    console.log('open');
  }

  return (
    <>
      <Header />
      <Hosts
        hosts={hosts}
        deleteHost={deleteHost}
        editHost={editHost}
        openHost={openHost}
      />
      <Popup trigger={<div className='addButton'>
        <Fab
          onClick={() =>
          {

          }}
          size="large"
        >
          <AddIcon
            fontSize="large"
            color="black"
          />
        </Fab>
      </div>} position="right center">
        <HostForm />
      </Popup>


    </>
  );
}

export default App;
