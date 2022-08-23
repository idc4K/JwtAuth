import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
function Home() {

  const navigue  = useNavigate();
  return (
    <div className="container">
      <h1>HOME</h1>
       <div className="jumbotron mt-5">
         <h1 className='display-4'>welcome To Auth Systtem</h1>
         <p className='lead'>THis is an incredible authentication system with production lele features</p>
         <hr className='my-4'/>
         <p>Click the log In button</p>
         <button className='btn btn-danger' onClick={()=>navigue('/Login')}>Login</button>
       </div>
  </div>
  )
}

export default Home