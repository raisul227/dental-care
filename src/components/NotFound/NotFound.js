import React from 'react';
import notFoundImg from '../../img/404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img className='error-img' src={notFoundImg} alt="" />
        </div>
    );
};

export default NotFound;