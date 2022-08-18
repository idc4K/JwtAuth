import {
    
    LOGIN_SUCCESS,
    LOGIN_FAIL, 
    USER_LOAD_USER_SUCCESS, 
    USER_LOAD_USER_FAIL  
} from './Types';

import axios from 'axios';

export const prefixer = 'http://localhost:8000';
export const load_user  = () => async dispatch =>{
    if(localStorage.getItem('access')){
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };
        
        try {
            const res = await axios.get(`${prefixer}/Register/`,config);
            dispatch({
                type: USER_LOAD_USER_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type:USER_LOAD_USER_FAIL,
            })
        }
    } else{
        dispatch({
            type:USER_LOAD_USER_FAIL,
        })
    }
};

export const login = (email,password) => async dispatch =>{
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({email,password});

    try {
        const res = await axios.post(`${prefixer}/auth/Login/`,body,config);
        dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data,
            
        });
        console.log(res.data);
        dispatch(load_user());
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
        });
    }
};