import React,{useNavigate} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  return (
    <div className="container">
      <h1>HOME</h1>
       <div className="jumbotron mt-5">
         <h1 className='display-4'>welcome To Auth Systtem</h1>
         <p className='lead'>THis is an incredible authentication system with production lele features</p>
         <hr className='my-4'/>
         <p>Click the log In button</p>
         <button>Login</button>
       </div>
  </div>
  )
}

export default Home