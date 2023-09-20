import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>            <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <span class="fs-4">Zabaa Gallery</span>
        </a>
        <ul class="nav nav-pills">
            <Link class="nav-link " aria-current="page" to="/">Portfolio</Link>
            <Link class="nav-link" to="/About">About</Link>
            <Link class="nav-link" to="/Contact">Contact</Link>
            <Link class="nav-link" to="/Events">Events</Link>
        </ul>
    </header>
</div></div>
  )
}

export default Header