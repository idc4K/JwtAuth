import React,{useEffect} from 'react';
import {BrowserRouter, Routes,Route,Navigate} from 'react-router-dom';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ResetPassConfirm from './components/ResetPassword/ResetPassConfirm';
import Layout from './components/hocs/Layout';
import Activate from './components/Activate/Activate';
import Content from './components/Content/Contenu';
import { Provider } from 'react-redux';
import store from './store';
import { load_user } from './actions/auth';
import Detail from './components/Content/Detail/Detail';


function App() {

  useEffect(() =>{
    store.dispatch(load_user());
  });
  return (
    <Provider store={store}>
        <BrowserRouter>
          
          <Routes>
              <Route path="/*" element={<Home/>}/>
              <Route path="SignUp/" element={<SignUp/>}/>
              <Route path="Activate/" element={<Activate/>}/>
              <Route path="Login/" element={<Login/>}/>
              <Route path="Content/" element={<Content/>}/>
              <Route path="ResetPassword/" element={<ResetPassword/>}/>
              <Route path="ResetPassConfirm/" element={<ResetPassConfirm/>}/>
              <Route path="Detail/:id" element={<Detail/>}/>
              <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
    </Provider>
    
  );
}

export default App;
