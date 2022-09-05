import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { prefixer } from '../../actions/auth';
function Content() {
//   GET ALL FILM  
  const [films,setFilm] = useState({});

  const getAllFilm = async () =>{
    const res = await axios.get(`${prefixer}`);
    console.log(res.data);
    setFilm(res.data);
  };
  useEffect(() => {
    getAllFilm();
  }, []);
// END GET ALL FILM

// GET ALL SERIE 

 const [series,setSerie] = useState({});

 const getAllSerie = async ()=>{
    const res = await axios.get(`${prefixer}`);
    console.log(res.data);
    setSerie(res.data);
 };
 useEffect(() => {
    getAllSerie();
 }, []);
 // END GET ALL SERIE
  
  return (
    <div>
        <div>
            {
                films.map((film,index) =>(
                    <div>
                        <p>{film.title}</p>
                    </div>
                ))
            }
        </div>
        <div>
            {
                series.map((serie,index) =>(
                    <p>{serie.title}</p>
                ))
            }
        </div>
    </div>
  )
}

export default Content