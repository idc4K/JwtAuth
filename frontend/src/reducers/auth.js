import {
    
    LOGIN_SUCCESS,
    LOGIN_FAIL, 
    USER_LOAD_SUCCESS, 
    USER_LOAD_FAIL ,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    LOGOUT, 
    SIGNUP_SUCCESS,
    SIGNUP_FAIL   
} from '../actions/types';



const initialState = {
    access : localStorage.getItem('access'),
    refresh : localStorage.getItem('refresh'),
    isAuthenticated: null,
    user:null
};

export default function(state = initialState, action){
    const{ type, payload } = action;

    switch (type) {
        case SIGNUP_SUCCESS:
            return{
                state,
                isAuthenticated:false
            };
        case AUTHENTICATED_SUCCESS:
            return{
                state,
                isAuthenticated:true
            };
        case AUTHENTICATED_FAIL:
            return{
                state,
                isAuthenticated:false
            };
        case LOGOUT:
            return{
                    
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('access',payload.access);
            return {
                state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            };
        case USER_LOAD_SUCCESS:
            return{
                state,
                user: action.payload,
            };
        case USER_LOAD_FAIL:
            return{
                state,
                user: null,  
            };
        case LOGIN_FAIL:
        case LOGOUT:
        case SIGNUP_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                state,
                isAuthenticated: false,
                access: null,
                refresh: null,
                user: null
            };
        
            
    
        default:
            return state;
    }
}