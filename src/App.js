import React, { useState, useEffect } from 'react';
import './App.css';
import Hosts from './components/Hosts';
import Header from './components/Header';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Popup from 'reactjs-popup';
import HostForm from './components/HostForm';
import axios from 'axios';
import Alert from './components/Alert'

function App() 
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
  }, [hosts])


  async function DeleteRequest(requestOptions)
  {
    try
    {
      await fetch(
        'http://localhost:3001/connections/delete', requestOptions)
        .then(response => response.text())
        .then(data =>
        {
          return data
        })
    } catch (e)
    {
      console.log(e);
    }
  }


  const handleFormSubmit = async (e, hostData) =>
  {
    try
    {
      const requestOptions =
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify
          ({
            "IP": hostData.ip,
            "username": hostData.hostName,
            "connectionName": hostData.hostNickname,
          })
      }

      await fetch(
        'http://localhost:3001/connections/insert', requestOptions)
        .then(response => response.text())
        .then(data =>
        {
          return data
        })
    }
    catch (e)
    {
      console.log(e);
    }


  }

  const deleteHost = async (id) =>
  {
    console.log(id);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id })
    };

    let response = await DeleteRequest(requestOptions)

    console.log("before :" + response);
    if (response == "Host deleted")
    {
      console.log("dzome");
      <Popup trigger={response != null}
        position="center center">
        <Alert
          cardBackgroundColor="white"
          headerBackgroundColor="#4CAF50"
          buttonBackgroundColor="#4CAF50"
          headerTitleColor="white"
          title="Success!"
          message="Host added succesfully"
          width="500px"
          height="300px"
        />

      </Popup>
      alert("Host deleted successfully");
      setHosts(hosts.filter((host) =>
        host._id !== id
      ))
    } else
    {
      alert("Error deleting host")
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
      </div>}
        position="right center">
        <HostForm
          submit={handleFormSubmit} />
      </Popup>


    </>
  );
}

export default App;
