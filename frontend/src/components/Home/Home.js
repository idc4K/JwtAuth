import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';

import Header from './Header/Header';
function Home() {
  const[count,setCount] = useState(0);
  
  useEffect(() => {
     document.title = `modifier title ${count}`;
  })
  

  const navigue  = useNavigate();
  return (
    <div>
      <Header/>
      {/* <h1>HOME</h1>
       <div className="jumbotron mt-5">
         <h1 className='display-4'>welcome To Auth Systtem</h1>
         <p className='lead'>THis is an incredible authentication system with production lele features</p>
         <hr className='my-4'/>
         <h1>{count}</h1>
         <p>Click the log In button</p>
         <button className='btn btn-danger' onClick={()=>navigue('/Login')}>Login</button>
         <button className='btn btn-danger my-5' onClick={()=> setCount(count+1)}>change title</button>
       </div> */}
  </div>
  )
}

export default Home