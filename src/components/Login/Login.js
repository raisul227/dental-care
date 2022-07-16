import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import googleLogo from '../../img/google-logo-9827.png';
import useAuth from './../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { handleEmail, handlePassword, error, handleLogin, googleSignIn, setError, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect__url = location.state?.from || "/home";
    const handleGoogleLogin = () => {
        setIsLoading(true)
        googleSignIn()
            .then(result => {
                history.push(redirect__url);
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    const handleEmailLogin = (event) => {
        event.preventDefault()
        setIsLoading(true)
        handleLogin()
            .then(result => {
                history.push(redirect__url);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <div>
            <form className='my-5' onSubmit={handleEmailLogin}>
                <h3 className='text-center'>Login</h3>
                <div className='form m-auto'>
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
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </div>
                <div className="mb-3 text-center">
                    <Button onClick={handleGoogleLogin} variant='light'><img className='googleLogo' src={googleLogo} alt="" /></Button>
                </div>
                <p className="forgot-password text-right">
                    Create a New Account <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;