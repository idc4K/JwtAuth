import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"black"}}>
    <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{color:"white"}}>Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{color:"white"}}>Header</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/header1" style={{color:"white"}}>Header1</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/header2" style={{color:"white"}}>Header2</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link disabled" to="/"style={{color:"grey"}}>Disabled</Link>
            </li>
        </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar