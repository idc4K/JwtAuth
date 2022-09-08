import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { prefixer } from '../../../actions/auth';

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

// GET ALL SERIE 

 const [series,setSerie] = useState([]);

 const getAllSerie = async ()=>{
    const res = await axios.get(`${prefixer}/auth/GetAllSerie/`);
    console.log(res.data);
    setSerie(res.data);
 };
 useEffect(() => {
    getAllSerie();
 }, []);
 // END GET ALL SERIE
  // const {titleSerie} = series;
  // const {titleFilm} = films;
  return (
    <>
       
        <CarouselImgs>

        </CarouselImgs>
        
    </>
  )
}

const CarouselImgs = style.section``;
export default SlideFirst