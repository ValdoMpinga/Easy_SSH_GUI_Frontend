import React, { useState, useEffect, CSSProperties } from 'react';
import './App.css';
import Hosts from './components/Hosts';
import Header from './components/Header';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Popup from 'reactjs-popup';
import HostForm from './components/HostForm';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";

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

  const css = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const [selectedHostId, setSelectedHostId] = useState()
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#4CAF50");
  const navigate = useNavigate();

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

    setFormContent
      ({
        ip: host.ip,
        login: host.login,
        password: host.password,
        connectionName: host.connectionName
      })
    document.getElementById('formButton').click()
  }

  const openHost = async (host) =>
  {
    setLoading(true)
    const requestOptions =
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify
        ({
          "ip": host.ip,
          "login": host.login,
          "password": host.password,
        })
    }


    let response = await fetch('http://localhost:3001/directories/get', requestOptions)
    let data = await response.text()
    let directoriesArray = data.split(',')
    navigate
      (
        "/directories",
        {
          state:
          {
            directoriesArray,
            host
          }
        }
      )
    setLoading(false)
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

      <MoonLoader
        color={color}
        loading={loading}
        css={css}
        speedMultiplier={0.5}
        size={100} />
      
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
