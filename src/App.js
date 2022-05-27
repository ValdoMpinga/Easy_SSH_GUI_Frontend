import React, { useState, useEffect } from 'react';
import './App.css';
import Hosts from './components/Hosts';
import Header from './components/Header';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Popup from 'reactjs-popup';
import HostForm from './components/HostForm';
import axios from 'axios';
import { Link } from "react-router-dom";

function App() 
{
  const [hosts, setHosts] = useState([])
  const [formTitle, setFormTitle] = useState('Add a Host')
  const [formContent, setFormContent] = useState
    ({
      ip: '',
      login: '',
      password: '',
      connectionName: ''
    })
  const [selectedHostId, setSelectedHostId] = useState()

  useEffect(() =>
  {
    axios.get('http://localhost:3001/connections/get')
      .then(res =>
      {
        setHosts(res.data)
        console.log(res.data);
      })
      .catch(err =>
      {
        console.log(err);
      })
  }, [formTitle])


  const handleFormSubmit = async (e, hostFormData) =>
  {
    try
    {
      e.preventDefault()

      if (formTitle == "Add a Host")
      {
        const requestOptions =
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify
            ({
              "ip": hostFormData.ip,
              "login": hostFormData.login,
              "password": hostFormData.password,
              "connectionName": hostFormData.connectionName,
            })
        }

        let response = await fetch('http://localhost:3001/connections/insert', requestOptions)
        let data = await response.text()

        if (data == "Host inserted")
        {
          alert("Host added successfully")
          window.location.reload()
        }
        else
          alert("Error inserting host, plese verify that your new host data is unique.")

      } else
      {

        let updateHostData =
        {
          _id: selectedHostId,
          ...hostFormData
        }

        const requestOptions =
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updateHostData)
        };

        let response = await fetch('http://localhost:3001/connections/update', requestOptions)
        let data = await response.text()

        if (data == "Host updated")
        {
          alert("Host updated successfully")
          window.location.reload()
        }
        else
          alert("Error updating host,please verify that your host is activated and available")


      }

    }
    catch (e)
    {
      console.log(e);
    }


  }

  const deleteHost = async (id) =>
  {
    let confirmation = window.confirm("Do really want to delete this Host?")

    if (confirmation)
    {
      const requestOptions =
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "id": id })
      };

      let response = await fetch('http://localhost:3001/connections/delete', requestOptions)
      let data = await response.text()

      if (data == "Host deleted")
      {

        alert("Host deleted successfully")
        setHosts(hosts.filter((host) =>
          host._id !== id
        ))
      } else
      {
        alert("Error deleting host")
        console.log(data);
      }
    }



  }

  const editHost = async (host) =>
  {
    setFormTitle("Update a Host")
    setSelectedHostId(host._id)
    setFormContent({
      ip: host.ip,
      login: host.login,
      password: host.password,
      connectionName: host.connectionName
    })
    document.getElementById('formButton').click()
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(host)
    // };
    // console.log(JSON.stringify(host));


    // if (data == "Host updated")
    // {
    //   alert("Host added successfully")
    //   window.location.reload()
    // }
    // else
    //   alert("Error inserting host, plese verify that your new host data is unique.")


    // let response = await fetch('http://localhost:3001/connections/update', requestOptions)
    // let data = await response.text()
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
          id="formButton"
          onClick={(e) =>
          {
            if (e.isTrusted)
            {
              setFormTitle("Add a Host")
              setFormContent({
                ip: '',
                login: '',
                password: '',
                connectionName: ''
              })
            }
            else
              setFormTitle("Update a form")

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
          formTitle={formTitle}
          formContent={formContent}
          submit={handleFormSubmit} />
      </Popup>
    </>
  );
}

export default App;
