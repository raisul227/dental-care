import React from 'react';
import './Showcase.css';
import { Button } from 'react-bootstrap';
const ShowCase = () => {
    return (
        <div className='showcase'>
            <div className='showcase-content'>
                <div className="content">
                    <h1>Let Us Brighten Your Smile</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laudantium ipsam. Nemo, tempora.</p>
                    <Button variant='success'>View More</Button>
                </div>

            </div>
        </div>
    );
};

export default ShowCase;