import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ResetPassConfirm from './components/ResetPassword/ResetPassConfirm';
import Layout from './components/hocs/Layout';
import Activate from './components/Activate/Activate';
import { Provider } from 'react-redux';
import Store from './components/Store/Store';
function App() {
  return (
    <Provider store={Store}>
        <BrowserRouter>
          <Layout/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="SignUp/" element={<SignUp/>}/>
              <Route path="Activate/" element={<Activate/>}/>
              <Route path="Login/" element={<Login/>}/>
              <Route path="ResetPassword/" element={<ResetPassword/>}/>
              <Route path="ResetPassConfirm/" element={<ResetPassConfirm/>}/>
          </Routes>
        </BrowserRouter>
    </Provider>
    
  );
}

export default App;
