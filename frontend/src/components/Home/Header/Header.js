import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { prefixer } from '../../../actions/auth';
function Header() {
  const [logo,setLogo] = useState({});
  const getLogo = async () =>{
    const res = await axios.get(`${prefixer}/auth/GetLogo/`);
    console.log(res.data);
  }
  useEffect(() =>{
    getLogo();
  }, []);

  return (
    <div>Header</div>
  )
}

export default Header