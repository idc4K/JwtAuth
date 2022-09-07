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
                  
                <Nav>
                    <li><p>Lorem ipsum</p></li>
                    <li><p>consectetur</p></li>
                    <li><p>dolor sit</p></li>
                    <li><p>adipiscing elit</p></li>
                    <li><p>sed do eius</p></li>
                    <li><p>mod tempor</p></li>
                    <li><p>incididunt ut</p></li>
                    <li><p>labore et</p></li>
                    <li><p>dolore magna</p></li>
                    <li><p>Ut enim ad minim</p></li>
                </Nav>
                <Copyright>
                    <p>© 2022 Farafina Net. Tous droits réservés.</p>
                </Copyright>
            </Container>
        </Section>
    </>
  )
}

const Section = styled.section`
 padding: 2rem 0;
 margin-bottom:0;

 @media screen and (max-width: 550px){
    padding : 1rem 0;
 }
`
const Container = styled.div`
    width: 95%;
    margin:auto;
`
const FooterBrand = styled.div`
    text-align: center;
    img{
        width:10rem;
        height:auto;
        object-fit: fill;
        @media screen and (max-width: 550px){
            width:7rem;
        }
    }
    

`
const Nav = styled.div`
    display:flex;
    align-items:center;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    flex-shrink: 0;
    flex-grow: initial;

    li{
        list-style: none;
        p{
            padding:0.5rem;
            font-size:0.9rem;
            margin-right: 0.3rem;

            @media screen and (max-width: 550px){
                font-size:0.75rem;
                padding:0.2rem
            }
        }
    }

`
const Copyright = styled.div`
  text-align: center;
  p{
    margin-top: 1vh;
    font-weight:400 !important;
    @media screen and (max-width: 550px){
            font-size:0.95rem;
        }
  }
`
export default Footer