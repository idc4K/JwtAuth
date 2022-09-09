import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { prefixer } from '../../../actions/auth';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chacka from "../../image/film5.jpeg";
import film5 from "../../image/LUCA-2.png";
function SlideSecond() {

  //   GET ALL FILM  
    const [films,setFilm] = useState([]);

    const getAllFilm = async () =>{
        const res = await axios.get(`${prefixer}/auth/GetAllFilm/`);
        console.log(res.data);
        setFilm(res.data);
    };
    useEffect(() => {
        getAllFilm();
    }, []);
// END GET ALL FILM
  return (
    <>
        <Section>
            <Carousel>
                <h1>FILMS</h1>
                <Wrap>
                    <div><Link to="/"><img src={chacka}/></Link></div>
                </Wrap>
            </Carousel>
        </Section>
    </>
  )
}

const Section = styled.section`
padding:1rem 0;
h1{
    font-size:1.7rem;
    text-transform: uppercase;
    font-weight: 300 !important;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(255,255,255,0.1);
    margin: 2vh 0 1vh 2rem;

    @media screen and (max-width:991px){
        font-size: 1.1rem;
    }
    @media screen and (max-width:550px){
        font-size: 0.95rem;
    }

}

`;
const Carousel = styled(Slider)`
    ul li button{
      &::before{
        font-size: 11px;
        color: rgb(150,158,171)
      }
    }

    ul li.slick-active button{
      &::before{
        color: #fff !important;
      }
    }
    & > button{
      opacity:0;
      z-index:500;
      width:5vw;
      height: 100%;
    }
    &:hover{
      opacity:1;
      z-index: 2000;
      transition: opacity 0.2s ease 0s;
    }

    .slick-prev{
      left: -75px;
    }
    .slick-next{
      right: -75px;
    }
    .slick-list{
      overflow: initial !important;
    }
`;
const Wrap = styled.div`
  position:relative;
  div{
    border-radius:4px;
    padding:4px;
    display:block;
    opacity: 1;
    z-index:2000;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: default;
    object-position: center;
  }
  img{
    width: 100%;
    height:100%; //100%
    object-fit: cover;
    border-radius: 4px;
   
    // image JPG DIMENSION 1440 X 450
  }
  &:hover{
    padding:1px;
    border:4px solid #fff;
    transition-duration:300ms;
  }

  /* IMAGE DIMENSION 630 X 378 */
`
export default SlideSecond