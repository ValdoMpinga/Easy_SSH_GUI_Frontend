import React from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Popup from 'reactjs-popup';


function App()
{


  return (
    <>
      <Header />
      <Card
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
       
      </Popup>
   

    </>
  );
}

export default App;
