import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';

import Header from './Header/Header';
import FirstSection from './Section/FirstSection';
import SecondSection from './Section/SecondSection';
import ThirdSection from './Section/ThirdSection';
import FourthSection from './Section/FourthSection';
import FifthSection from './Section/FifthSection';
import Footer from './Footer/Footer';
function Home() {
  const[count,setCount] = useState(0);
  
  useEffect(() => {
     document.title = `modifier title ${count}`;
  })
  

  const navigue  = useNavigate();
  return (
    <div>
      <Header/>
      <FirstSection/>
      <ThirdSection/>
      <FourthSection/>
      <SecondSection/>
      <FifthSection/>
      <Footer/>
     
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