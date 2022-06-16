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
  const [formContent, setFormContent] = useState
    ({
      directoryName: '',
    })
  const css = {
    display: "block",
    margin: "0 auto",
    position: "absolute"
  };
  const [directoriesFootprints,setDirectorieFootprints]= useState([])

  useEffect(() =>
  {

    if (directories.length == 0)
      setDirectories(state.directoriesArray)
  }, [directories,directoriesFootprints])

  const handleFormSubmit = async (e, directoryName,oldDirectoryName) =>
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
        const requestOptions =
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify
            ({
              "oldDirectoryName": oldDirectoryName,
              "newDirectoryName": directoryName,
              "ip": state.host.ip,
              "login": state.host.login,
              "password": state.host.password,
            })
        }

        let response = await fetch('http://localhost:3001/directories/update', requestOptions)
        let data = await response.text()


        if (data == "Directory updated")
        {
          alert("Directory updated successfully")
          window.location.reload()
        }
        else
          alert("Error updating host, plese verify that your new host data is unique.")

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

  const editDirectory = async (directoryName) =>
  {
    setFormTitle("Update a Directory")

    setFormContent
      ({
        directoryName: directoryName
      })
    document.getElementById('directoryFormButton').click()
  }

  const openDirectory = async (directoryName) =>
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


    let response = await fetch('http://localhost:3001/directories/get/subdirs', requestOptions)
    let data = await response.text()

    console.log(data);
    let directoriesArray = data.split(',')
    let filteredDirectoriesArray = []

    setDirectorieFootprints(...directories, directoryName)
    console.log(directoryName);
    console.log(directoriesFootprints);

    let jsonArray = JSON.stringify(directoriesFootprints)
    console.log("JSON array bellow");
    console.log(jsonArray);

    directoriesArray.forEach(dir =>
    {
      if (dir != "")
        filteredDirectoriesArray.push(dir)
    });

    setDirectories(filteredDirectoriesArray)

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
        editDirectory={editDirectory}
        openDirectory={openDirectory}


      />

      <Popup trigger={<div className='addButton'>
        <Fab
          id="directoryFormButton"
          onClick={(e) =>
          {
            if (e.isTrusted)
            {
              setFormTitle("Add a Directory")
              setFormContent
                ({
                  directoryName: ''
                })
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
          formContent={formContent}
          submit={handleFormSubmit}
        />
      </Popup>


    </div>
  )
}

export default Directory

