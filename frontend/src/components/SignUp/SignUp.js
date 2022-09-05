import React,{useState} from "react";
import {Link, Navigate} from 'react-router-dom';
import { sign } from "../../actions/auth";
import { connect } from 'react-redux';
function SignUp({sign,isAuthenticated}) {
  const [AccountCreate, SetAccountCreate] = useState(false); 
  const [formSignData,setDataForm] = useState({
    last_name :'',
    first_name:'',
    email:'',
    password:'',
    re_password:''
  });

  const handleChange = (e) =>{
    setDataForm({
      ...formSignData,
      [e.target.name] : e.target.value
    });
  };

  const onSub = (e) =>{
    e.preventDefault();
    if(password === re_password){
      sign(last_name,first_name,email,password,re_password);
      SetAccountCreate(true);
    }
    
  }; 

  if(isAuthenticated){
    return  <Navigate to="/"/>
  }

  if(AccountCreate){
    return <Navigate to='/Login'/>
  }
  const {last_name,first_name,email,password,re_password} = formSignData;
  return (
    <div className="container mt-5">
      <h1 className="text-center">Inscrivez vous</h1>
      <form onSubmit={onSub}>
      <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nom"
            name="last_name"
            value={last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Prenom"
            name="first_name"
            value={first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control mt-3"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            minLength="8"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control mt-3"
            placeholder="Re_password"
            name="re_password"
            value={re_password}
            onChange={handleChange}
            minLength="8"
            required
          />
        </div>
        <button className="btn btn-danger mt-3">Inscription</button>
      </form>
      <p className="mt-3">
        Vous avez déjà un compte? <Link to="/SignUp">Connectez-vous</Link>
      </p>
    </div>
  );
}

const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated 
});

export default connect(mapStateToProps, {sign})(SignUp);
