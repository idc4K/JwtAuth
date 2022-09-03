import React,{useState} from "react";
import {Link} from 'react-router-dom';

function SignUp() {
  
  const [formSignData,setDataForm] = useState({
    last_name :'',
    first_name:'',
    email:'',
    password:''
  });

  const handleChange = (e) =>{
    setDataForm({
      ...formSignData,
      [e.value.name] : e.target.value
    });
  };
  const {last_name,first_name,email,password} = formSignData;
  return (
    <div className="container mt-5">
      <h1 className="text-center">Connectez vous</h1>
      <form >
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
        <button className="btn btn-danger mt-3">connexion</button>
      </form>
      <p className="mt-3">
        Vous avez déjà un compte? <Link to="/SignUp">Connectez-vous</Link>
      </p>
    </div>
  );
}

export default SignUp;
