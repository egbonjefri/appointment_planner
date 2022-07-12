import React from "react";

import { NavLink } from 'react-router-dom'

import './materialize.css'

export default function NavBar () {
    return (
        <nav>
        <div className='nav-wrapper'>
        <ul className='brand-logo center'>
          <li>
          <NavLink to='/contacts'> Contacts</NavLink>
          </li>
          <li>
          <NavLink to='/appointments'> Appointments</NavLink>
          </li>
        </ul>
      </div>
      </nav>
    )
}