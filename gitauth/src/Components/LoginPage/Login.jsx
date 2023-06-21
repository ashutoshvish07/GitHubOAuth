import React from 'react';
import { login } from '../../Features/authSlice';
import { useDispatch } from 'react-redux';
const Clint_ID = "e95424ef04e978c1f424"

const LoginPage = () => {
    // const dispatch = useDispatch();

    // const handleLogin = () => {
    //     // Perform login logic and retrieve the access token
    //     const accessToken = Clint_ID; 

    //     dispatch(login({ accessToken }));
    // };
    const handleLogin = () => {
        // Implement GitHub OAuth login logic here
        window.location.assign("https://github.com/login/oauth/authorize?client_id=" + Clint_ID)
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <h1 >Login Page</h1>

            <button className="btn btn-success" onClick={handleLogin}>Login with GitHub</button>
        </div>
    );
};

export default LoginPage;
