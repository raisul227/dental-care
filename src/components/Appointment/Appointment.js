import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Appointment = () => {
    const { dataId } = useParams();
    useEffect(() => {
        fetch("./serviceData.json")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>This Is Appointment Page</h1>
        </div>
    );
};

export default Appointment;