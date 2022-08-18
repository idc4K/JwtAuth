import React,{useState} from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'redux';

function Login() {
  const[formData,setData] = useState({
    email:'',
    password:''
  });
  const {email,password } = formData;

  const handleChange = e =>{
    setData({
        ...formData,
        [e.target.name] : e.target.value
    })

  }

  const handleSubmit = e =>{
    e.preventDefault();
  }
  return (
    <div>Login</div>
  )
}

export default connect()(Login);