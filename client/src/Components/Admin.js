import React from 'react'
import { Link } from 'react-router-dom';


function Admin() {
  return (
    <div>
      <div className='home-page'>
      <div className='link-container'>
      <Link className='link' to="/Control/Admin/Page/SeeContact">Contact</Link>

      </div>
      <div className='link-container'>
      <Link className='link' to="/Control/Admin/Page/ControlEvant">Evants</Link>

      </div>
        </div>
    </div>
  )
}

export default Admin