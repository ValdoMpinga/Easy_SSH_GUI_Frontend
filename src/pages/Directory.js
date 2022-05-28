import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import DirectoriesCard from '../components/DirectoriesCard'
import { useParams } from 'react-router-dom'
import
{
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import axios from 'axios';


function Directory(props)
{
  const { state } = useLocation();
  const [directories, setDirectories] = useState(null)

  useEffect(() =>
  {
    console.log("here: " +state);
    // async function onPageLoad()
    // {
    //   const requestOptions =
    //   {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify
    //       ({
    //         "ip": state.ip,
    //         "login": state.login,
    //         "password": state.password,
    //       })
    //   }


    //   let response = await fetch('http://localhost:3001/directories/get', requestOptions)
    //   let data = await response.text()

    //   let dataArray = data.split(',')

    //   setTimeout(() =>
    //   {
    //     setDirectories(dataArray)
    //     console.log(": " + directories);
    //   },5000)
  
    // }

    // onPageLoad()

    // const host =
    // {
    //   ip: state.ip,
    //   login: state.login,
    //   password: state.password,
    // }


    // axios.post('http://localhost:3001/directories/get',host)
    //   .then(function (response) 
    //   {
    //     let data = response.data
    //     let dataArray = data.split(',')
    //     setDirectories(dataArray)
    //     console.log(directories);
    //   })
    //   .catch(function (error)
    //   {
    //     console.log(error);
    //   });


  }, [])





  return (
    <div>
      <Header />
      <h1 className="pageTitle">Host's directories</h1>
      <DirectoriesCard
        directories={state}
      />
    </div>
  )
}

export default Directory

