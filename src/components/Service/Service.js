import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, img, name, details } = props.service;
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
            </Card.Body>
            <Link className='text-center' to={`/appointment/${id}`}><Button className='m-4' variant='success'>Request An Appointment</Button></Link>
        </Card>
    );
};

export default Service;