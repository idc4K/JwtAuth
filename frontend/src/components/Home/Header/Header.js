import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { prefixer } from '../../../actions/auth';
function Header() {
  const [logos,setLogo] = useState([]);
  const getLogo = async () =>{
    const res = await axios.get(`${prefixer}/auth/GetLogo/`);
    console.log(res.data);
    setLogo(res.data);
  }
  useEffect(() =>{
    getLogo();
  }, []);
  
//   const {logo_file} = logo;
  return (
    <div>
        
            
                    {
                        logos.map((logo,index) =>(
                            <img key={logo.id} src={`${prefixer}/`+logo.logo_file}/>
                        ))
                    }
                    
        -
        
    </div>
  )
}

export default Header