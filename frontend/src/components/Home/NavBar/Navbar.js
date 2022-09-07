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
            <li><Link className='nav-link' to="/"><img src={watch}/><span>Ma Liste</span></Link></li>
            <li><Link className='nav-link' to="/"><img src={serie}/><span>Series</span></Link></li>
            <li><Link className='nav-link' to="/"><img src={movie}/><span>Films</span></Link></li>
            <li><Link className='nav-link' to="/"><img src={movie}/><span>Documentaires</span></Link></li>
        </MenuLinks>
        <UserAuth></UserAuth>
    </Nav>
    </>
  )
}

const Nav = styled.section``
const NavBrand = styled.div`
    width:101px;
    height: auto;
    object-position: center;

    img{
       width:100%; 
       height:auto;
       object-fit:fill;
    }
`
const MenuLinks = styled.div`
display:flex;
align-items: center;
flex-direction: row;
flex-wrap: row wrap;
flex-shrink: 0;
justify-content: flex-start;
 li{
    list-style:none;
    > .nav-link{
        text-decoration:none;
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
    }
 }
 
 }

`
const UserAuth = styled.div``
export default Navbar