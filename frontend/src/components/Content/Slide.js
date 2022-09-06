import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { prefixer } from '../../actions/auth';

function Slide() {
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
    <div>
       
            {
                films.map((film,index) =>(
                    <div>
                        <p>{film.title}</p>
                    </div>
                ))
            }
      
            {/* <p>Serie: {titleSerie}</p> 
            <p>Film: {titleFilm}</p> */}
            {
                series.map((serie,key) =>(
                    <p>{serie.title}</p>
                ))
            }
        
    </div>
  )
}

export default Slide