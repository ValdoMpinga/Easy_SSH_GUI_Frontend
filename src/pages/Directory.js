import React from 'react'
import Header from '../components/Header'
import DirectoriesCard from '../components/DirectoriesCard'
  
function Directory() {
  return (
    <div>
      <Header/>
      <h1 className="pageTitle">Host's directories</h1>
      <DirectoriesCard />
    </div>
  )
}

export default Directory

