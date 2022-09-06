import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { prefixer } from '../../../actions/auth';
import { useNavigate } from 'react-router';

function Header() {
  const navigate = useNavigate();
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
        
        <Background>
            <Container>
                <Content>
                    {
                            logos.map((logo,index) =>(
                                <img key={logo.id} src={`${prefixer}/`+logo.logo_file}/>
                            ))
                    }
                    <button type="button" className="btn btn-danger">Start Now</button>
                </Content>
            </Container>
        </Background>
        
    </div>
  )
}

export default Header