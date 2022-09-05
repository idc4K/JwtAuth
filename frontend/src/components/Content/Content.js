import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { prefixer } from '../../actions/auth';
function Content() {
  const [content,setContent] = useState({});

  const getFilm = async () =>{
    const res = await axios.get(`${prefixer}`);
    console.log(res.data);
    setContent(res.data);
  };
  useEffect(() => {
    getFilm();
  }, []);
  
  return (
    <div>
        {
            films.map((film,index) =>(
                <div>
                    <p>{film.name}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Content