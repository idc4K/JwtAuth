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
  };

  useEffect(() => {
    getLogo();
  }, []);
  
  return (
    <>
        <Section>
            <Container>
                <FooterBrand>
                    {
                        logo.map((logos,index) =>(
                            <img key={logos.id} src={`${prefixer}/`+logos.logo_file}/>
                        ))
                    }
                </FooterBrand>
                   amet, ,     aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                <Nav>
                    <li>Lorem ipsum</li>
                    <li>consectetur</li>
                    <li>dolor sit</li>
                    <li>adipiscing elit</li>
                    <li>sed do eius</li>
                    <li>mod tempor</li>
                    <li>incididunt ut</li>
                    <li>labore et</li>
                    <li>dolore magna</li>
                </Nav>
            </Container>
        </Section>
    </>
  )
}

const Section = styled.section``
const Container = styled.div``
const FooterBrand = styled.div``
const Nav = styled.div``
export default Footer