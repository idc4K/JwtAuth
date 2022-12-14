import React,{useState} from 'react';
import {Link,Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '../../actions/auth';

function Login({ login,isAuthenticated }) {
  const[formData,setData] = useState({
    email:'',
    password:''
  });
  const {email,password} = formData;

  const handleChange = e =>{
    setData({
        ...formData,
        [e.target.name] : e.target.value
    });

  };

  const handleSubmit = e =>{
    e.preventDefault();
    login(email,password);
  };

  if(isAuthenticated){
    return  <Navigate to="/"/>
  }

  return (
    <div className="container mt-5">
        <h1 className="text-center">Connectez vous</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Email" name="email" value={email} onChange={handleChange} required/> 
            </div>
            <div className="form-group">
                <input type="password" className="form-control mt-3" placeholder="Password" name="password" value={password} onChange={handleChange} minLength="8" required/> 
            </div>
            <button className="btn btn-danger mt-3">connexion</button>
        </form>
        <p className="mt-3">
            Vous n'avez pas de compte? <Link to="/SignUp">Inscrivez-vous</Link>
        </p>
        <p className="mt-3">
            Mot de passe oublié? <Link to="/ResetPassword">Inscrivez-vous</Link>
        </p>
    </div>
  );
};

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated 
});

export default connect(mapStateToProps, {login})(Login);