import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import googleLogo from '../../img/google-logo-9827.png';
import useAuth from './../Hooks/useAuth';

const Register = () => {
    const { handleEmail, handleName, handlePassword, googleSignIn, handleRegistration, error } = useAuth();
    return (
        <div>
            <form className='my-5' onSubmit={handleRegistration}>
                <h3 className='text-center'>Sign Up</h3>
                <div className='form m-auto'>
                    <div className="mb-3">
                        <label>First name</label>
                        <input
                            onBlur={handleName}
                            type="text"
                            className="form-control"
                            placeholder="First name"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input onBlur={handleEmail}
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input onBlur={handlePassword}
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="mb-3">
                        <p className='text-danger'>{error}</p>
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-success">
                            Sign Up
                        </button>
                    </div>
                </div>
                <div className="mb-3 text-center">
                    <Button onClick={googleSignIn} variant='light'><img className='googleLogo' src={googleLogo} alt="" /></Button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">Login?</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;