import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { prefixer } from '../../../actions/auth';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chacka from "../../image/film5.jpeg";
import film5 from "../../image/im.png";
function SlideFirst() {
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

// GET ALL CAROUSEL IMAGE

 const [carousel,setCarousel] = useState([]);

 const getAllCarousel = async ()=>{
    const res = await axios.get(`${prefixer}/auth/GetImageCarousel/`);
    console.log(res.data);
    setCarousel(res.data);
 };
 useEffect(() => {
    getAllCarousel();
 }, []);
 // END GET ALL SERIE
  // const {titleSerie} = series;
  // const {titleFilm} = films;

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <>
       
        <CarouselImgs {...settings}>
              <Wrap>
                 <div><img src={chacka}/></div>
              </Wrap>
              <Wrap>
                 <div><img src={film5}/></div>
              </Wrap>
              
        </CarouselImgs>
        
    </>
  )
}

const CarouselImgs = styled(Slider)`
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
    height:900px; //100%
    object-fit: cover;
    border-radius: 4px;
   
    // image JPG DIMENSION 1440 X 450
  }
  &:hover{
    padding:1px;
    border:4px solid #fff;
    transition-duration:300ms;
  }
`
export default SlideFirst