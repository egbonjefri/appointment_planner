import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Contacts from './Contacts.js'
import Appointments from './Appointments.js'
import './materialize.css'

import NavBar from './NavBar.js' 

function App() {
  return (
    <div className="App">
      <header className='center'>
        <h2>Appointment Planner</h2>
      </header>
    <NavBar />
    
      <Routes>
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/appointments' element={<Appointments />} />
      </Routes>
     <p className='author center'>Created by @egbonjefri for CodeCademy</p>
    </div>
  );
}

export default App;
