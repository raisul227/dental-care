import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DynamicUser from '../DynamicUser/DynamicUser';

const Appointment = () => {
    const { dataId } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/raisul227/dental-care/main/public/serviceData.json`)
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    const convertedId = Number(dataId)
    console.log(typeof (dataId))
    const getFilteredData = data.filter(user => user.id === convertedId
    );
    console.log(getFilteredData)
    return (
        <div>
            {
                getFilteredData.map(user => <DynamicUser key={user.id} user={user}></DynamicUser>)
            }
        </div>
    );
};

export default Appointment;