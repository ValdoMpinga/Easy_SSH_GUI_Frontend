import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import DirectoriesCard from '../components/Directories'
import
{
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
import Fab from '@mui/material/Fab';
import Popup from 'reactjs-popup';
import AddIcon from '@mui/icons-material/Add';
import DirectoryForm from '../components/DirectoryForm';

function Directory(props)
{
  const { state } = useLocation();
  const [directories, setDirectories] = useState([])
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#4CAF50");
  const [formTitle, setFormTitle] = useState('Add a Directory')
  const css = {
    display: "block",
    margin: "0 auto",
    position: "absolute"
  };

  useEffect(() =>
  {
    if (directories.length == 0)
      setDirectories(state.directoriesArray)
  }, [directories])

  const handleFormSubmit = async (e, directoryName) =>
  {
    try
    {
      e.preventDefault()

      if (formTitle == "Add a Directory")
      {
        const requestOptions =
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify
            ({
              "directoryName": directoryName,
              "ip": state.host.ip,
              "login": state.host.login,
              "password": state.host.password,
            })
        }

   

        let response = await fetch('http://localhost:3001/directories/insert', requestOptions)
        let data = await response.text()


        if (data == "Directory inserted")
        {
          alert("Host added successfully")
          window.location.reload()
        }
        else
          alert("Error inserting host, plese verify that your new host data is unique.")
      } else
      {

      }

    } catch (e)
    {

    }

  }


  const deleteDirectory = async (directoryName) =>
  {

    let confirmation = window.confirm("Do really want to delete this Directory?")

    if (confirmation)
    {
      setLoading(true)
      directoryName = directoryName.replace('\r', '')
      const requestOptions =
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify
          ({
            "directoryName": directoryName,
            "ip": state.host.ip,
            "login": state.host.login,
            "password": state.host.password,
          })
      }
      let response = await fetch('http://localhost:3001/directories/delete', requestOptions)
      let data = await response.text()

      if (data == "Directory deleted")
      {
        console.log(directoryName);
        alert("Host deleted successfully")
        setDirectories(directories.filter((dir) =>
        {
          return dir != directoryName
        }
        ))
      } else
      {
        alert("Error deleting host")
      }
      setLoading(false)

    }
  }

  return (
    <div>
      <Header />
      <h1 className="pageTitle">Host's directories</h1>
      <MoonLoader
        color={color}
        loading={loading}
        css={css}
        speedMultiplier={0.5}
        size={100} />
      <DirectoriesCard
        directories={directories}
        deleteDirectory={deleteDirectory}

      />

      <Popup trigger={<div className='addButton'>
        <Fab
          id="formButton"
          onClick={(e) =>
          {
            if (e.isTrusted)
            {

            }

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
        <DirectoryForm
          formTitle={formTitle}
          submit={handleFormSubmit}
        />
      </Popup>


    </div>
  )
}

export default Directory

