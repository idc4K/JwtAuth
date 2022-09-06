import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { prefixer } from '../../../actions/auth';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

function Header() {
  const navigate = useNavigate();
  const [logos,setLogo] = useState([]);
  const getLogo = async () =>{
    const res = await axios.get(`${prefixer}/auth/GetLogo/`);
    console.log(res.data);
    setLogo(res.data);
  };
  useEffect(() =>{
    getLogo();
  }, []);
  
//   const {logo_file} = logo;
  return (
    <>
        
        <div className='Background'>
            <Container>
                <Content>
                    {
                            logos.map((logo,index) =>(
                                <img key={logo.id} src={`${prefixer}/`+logo.logo_file}/>
                            ))
                    }
                    <button type="button" className="btn btn-danger start" onClick={()=> navigate("SignUp")}>Start Now</button>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</h4>
                </Content>
            </Container>
        </div>
        
    </>
  );
}
// const Background = styled.section`
//     background-image: url("../image/pochetteafrique.png");
//     height:95vh;
//     background-position: center;
//     background-size: cover;
//     background-repeat: no-repeat;
//     font-size: 80%;
//     color:red;
    

    

const Container = styled.div`
    width:85%;
    margin:0 auto;
`
const Content = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 650px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (min-width: 768px) and (max-width:1200px){
        max-width:550px;
    }
    @media screen and (min-width: 550px) and (max-width:767px){
      max-width:450px;
      margin-top: 13vh;
    }
    @media screen and (min-width: 375px) and (max-width:550px){
      max-width:350px;
      margin-top: 13vh;
    }
    @media screen and (min-width: 280px) and (max-width:375px){
      max-width:auto;
      margin-top: 13vh;
    }
    h4{
        margin: 2vh 0;
    }
    img{
        display: block;
        max-width: 600px;
        object-fit: contain;
    }
    > .start{
        outline: none;
        border: none;
        width: 100%;
        padding: 11.5px 15px;
        align-items: center;
        text-align: center;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-size:18px;
        color: #f9f9f9;
        transition: all 0.4s ease-in-out;
        border-radius: 0.350rem;
        @media screen and (min-width: 550px) and (max-width:1200px){
          padding:10px 0;
          font-size:15px;
        }
        @media screen and (min-width: 280px) and (max-width:550px){
          padding:5px 0;
          font-size:14px;
        }
        &:hover{

        }
    }

`
export default Header