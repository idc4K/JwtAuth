import React,{useEffect} from 'react';
import Navbar from '../Home/NavBar/Navbar';
import { connect } from 'react-redux';
import { load_user } from '../../actions/auth';
const  Layout = (props) => {
  useEffect(() => {
    // props.checkAuthenticated();
    props.load_user();
  },[]);
  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default connect(null, {load_user})(Layout);