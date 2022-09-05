import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { prefixer } from '../../actions/auth';
function Content() {
//   GET ALL FILM  
  const [movie,setMovie] = useState({});

  const geAlltFilm = async () =>{
    const res = await axios.get(`${prefixer}`);
    console.log(res.data);
    setMovie(res.data);
  };
  useEffect(() => {
    getAllFilm();
  }, []);
// END GET ALL FILM

// GET ALL SERIE 

 const [s,setSerie] = useState({});

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
                        <p>{film.name}</p>
                    </div>
                ))
            }
        </div>
        <div>
            {
                series.map((serie,index) =>(
                    <p>{serie.name}</p>
                ))
            }
        </div>
    </div>
  )
}

export default Content