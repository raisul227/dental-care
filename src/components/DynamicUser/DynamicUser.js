import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DynamicUser = (props) => {
    console.log(props.user)
    const { img, name, details } = props.user;
    return (
        <div className='d-flex justify-content-center py-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to='/home'>
                        <Button variant="primary">Home</Button>
                    </Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default DynamicUser;