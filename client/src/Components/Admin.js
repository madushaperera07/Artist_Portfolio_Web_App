import React from 'react'
import { Link } from 'react-router-dom';


function Admin() {
  return (
    <div>
        <Link to="/Control/Admin/Page/SeeContact">Contact</Link>
        <Link to="/Control/Admin/Page/ControlEvant">Evants</Link>
    </div>
  )
}

export default Admin