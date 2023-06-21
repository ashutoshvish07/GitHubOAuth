import React from 'react';
import { login } from '../../Features/authSlice';
import { useDispatch } from 'react-redux';
const Clint_ID = "e95424ef04e978c1f424"

const LoginPage = () => {

    const handleLogin = () => {
        window.location.assign("https://github.com/login/oauth/authorize?client_id=" + Clint_ID)
    };

    return (
        <div className="container-fluid ">
            <div>
                <div className='row col-6 m-auto border border-2 border-success'>
                    <div className="col col-md-12 text-center">
                        <div className=''>
                            <h1 >Login Page</h1>
                        </div>
                    </div>
                    <div className="col col-md-12">
                        <div className="col col-md-12 text-center">
                            <div className='mt-5 mb-5'>
                                <button className="btn btn-success" onClick={handleLogin}>Login with GitHub</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default LoginPage;
