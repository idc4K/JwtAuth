import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { prefixer } from '../../actions/auth';
function Content() {
  const [content,setContent] = useState({});

  const getFilm = async () =>{
    const res = await axios.get(`${prefixer}`);
    console.log(res.data);
  };
  useEffect(() => {
    getFilm();
  }, []);
  
  return (
    <div>Content</div>
  )
}

export default Content