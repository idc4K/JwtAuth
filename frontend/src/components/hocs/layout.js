import React,{useEffect} from 'react';
import Navbar from '../NavBar/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated,load_user } from '../actions/Auths';
const  Layout = (props) => {
  useEffect(() => {
    props.checkAuthenticated();
    props.load_user();
  },[]);
  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default connect(null, {checkAuthenticated,load_user})(Layout);