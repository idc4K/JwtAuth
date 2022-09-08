import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import axios from 'axios';
import { prefixer } from '../../../actions/auth';
import movie from'../../image/movie-icon.svg';
import search from'../../image/search-icon.svg';
import watch from'../../image/watchlist-icon.svg';
import serie from'../../image/series-icon.svg';
// import home from'../../image/home-icon.svg';
import profile from '../../image/p.png';
// import deconexion from '../../image/deconexion.svg';
function Navbar() {
    const[logo, setlogo] = useState([]);

    const getLogo = async () =>{
    const res = await axios.get(`${prefixer}/auth/GetLogo/`);
    console.log(res.data);
    setlogo(res.data);
  };

  useEffect(() => {
    getLogo();
  }, []);

  const [stateBtn,setState] = useState(false);

  const handlePrint = () =>{
    setState(!stateBtn);
  };
  
  return (
    <>
    <Nav>
        <NavBrand>
        {
            logo.map((logos,index) =>(
            <img key={logos.id} src={`${prefixer}/`+logos.logo_file}/>
            ))
        }
        </NavBrand>
        <MenuLinks>
            <li><Link className='nav-link' to="/"><span>Accueil</span></Link></li>
            <li><Link className='nav-link' to="/"><img src={search}/><span>Recherche</span></Link></li>
            <li><Link className='nav-link' to="/"><img src={serie}/><span>Series</span></Link></li>
            <li><Link className='nav-link' to="/"><img src={movie}/><span>Films</span></Link></li>
            <li><Link className='nav-link' to="/"><img src={movie}/><span>Documentaires</span></Link></li>
            <li><Link className='nav-link' to="/"><img src={watch}/><span>Ma Liste</span></Link></li>
        </MenuLinks>
        <UserAuth>
            <img src={profile} onClick={handlePrint}/>
        </UserAuth>
        <PopUpMenu activeState={stateBtn}>
            <li><Link className='nav-link' to="/"><span>Parametre</span></Link></li>
            <li><Link className='nav-link' to="/"><span>Deconexion</span></Link></li>
        </PopUpMenu>
    </Nav>
    </>
  )
}

const Nav = styled.section`
    display: flex;
    min-height: 2vh;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.2rem 3rem;

`
const NavBrand = styled.div`
    width:101px;
    height: auto;
    object-position: center;

    img{
       width:120%; 
       height:auto;
       object-fit:fill;
    }
`
const MenuLinks = styled.div`
display:flex;
min-height: 7vh;
align-items: center;
flex-direction: row;
flex-wrap: row wrap;
flex-shrink: 0;
justify-content: flex-start;
margin-right: auto;
margin-left: 3rem;
 li{
    list-style:none;
    > .nav-link{
        display: flex;
        align-items: center;
        text-decoration:none;
        position:relative;
    img{
        width: 1.3rem;
        height: 1.3rem;
        object-fit: contain;
    }
    span{
        font-size:1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.08;
        color:#fff;
        padding:0.5rem;
        margin-top: 2px;
        position:relative;

        &::before{
            position:absolute;
            content: "";
            top:100%;
            left:0;
            right: 0;
            height:2px;
            width: 0%;
            background: #f9f9f9;
            transition: all 0.7s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
    }
 }
 &:hover{
    span::before{
        width: 100%;
    }
 }
 
 }

`
const UserAuth = styled.div`
width: 50px;
height: 50px;
object-fit: center;
position: relative;
img{
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 100px;
  
}

`
const PopUpMenu = styled.div`
 position: absolute;
 top:10vh;
 right: 3.5rem;
 padding: 0.5rem 1rem;
 background-color: #040714;
 border-radius: 0.345rem;
 border: 1.3px solid rgba(151,151,151,1);
 box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
 display: ${event => event.activeState ? "flex":"none"};
 align-items: flex-start;
 flex-direction: column;
  li{
    width: 100%;
    display: flex;
    align-items: flex-start;
    border-bottom: 1.3px solid rgba(151,151,151,1);
    list-style:none;
    > .nav-link{
        display: flex;
        align-items: center;
        text-decoration:none;
        position:relative;
    img{
        width: 1.3rem;
        height: 1.3rem;
        object-fit: contain;
    }
    span{
        font-size:1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.08;
        color:#fff;
        padding:0.5rem;
        margin-top: 2px;
        position:relative;
 }
 
    }
  }
`
export default Navbar