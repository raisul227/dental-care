import React from 'react';
import './Footer.css';
import img from '../../img/Dental-logo.png';

const Footer = () => {
    return (
        <div className=' footer py-3 d-flex justify-content-around align-items-center'>
            <img style={{ width: '80px' }} src={img} alt="" />
            <p className='mx-5'> Dentario &copy; all rights Reserved</p>
        </div>
    );
};

export default Footer;