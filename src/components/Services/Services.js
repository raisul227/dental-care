import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import CardGroup from 'react-bootstrap/CardGroup';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./serviceData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='py-5'>
            <h2 className='text-center py-5 text-success'>Our Services</h2>
            <div className='service-container'>
                <CardGroup className='card-container'>
                    {
                        services.map((service) => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </CardGroup>
            </div>

        </div>
    );
};

export default Services;