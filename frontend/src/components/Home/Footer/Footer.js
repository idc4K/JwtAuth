import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { prefixer } from '../../../actions/auth';
function Footer() {

  const[logo, setlogo] = useState([]);

  const getLogo = async () =>{
    const res = await axios.get(`${prefixer}/auth/GetLogo/`);
    console.log(res.data);
    setlogo(res.data);
  }

  useEffect(() => {
    

  }, [])
  
  return (
    <>
        <Section>
            <Container>
                <FooterBrand>
                    {
                        logo.map((logos,index) =>(
                            <img key={logo.id} src={`${prefixer}/`+logo.logo_file}/>
                        ))
                    }
                </FooterBrand>
            </Container>
        </Section>
    </>
  )
}

export default Footer