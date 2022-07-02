import React from 'react'
import {Container} from 'react-bootstrap'
import { BsCart2 } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { IoIosNotificationsOutline } from 'react-icons/io';

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light nav-shadow mb-1 bg-body round">
<Container> <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className=""><FiMenu /></span>
  </button>
  <a className="navbar-brand" href="#"><BsCart2 className='m-2'/> <IoIosNotificationsOutline className='m-2'/></a>
  
  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div></Container>
</nav>  )
}

export default Navbar