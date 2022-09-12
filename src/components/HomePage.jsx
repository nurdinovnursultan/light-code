import React, { useState } from 'react';
import Menu from './Menu';
import CustomizedTable from './Table';

const HomePage = () => {
    const [currentData, setCurrentData] = useState({
        id: 0,
        name: 'Phone',
        data: 'phone'
    })

    const data = [
        {
            id: 0,
            name: 'Phone',
            data: 'phone'
        },
        {
            id: 1,
            name: 'Address',
            data: 'address'
        },
        {
            id: 2,
            name: 'E-mail',
            data: 'email'
        },
        {
            id: 3,
            name: 'Salary',
            data: 'salary'
        }
    ]

    return (
        <div>
            <CustomizedTable currentData={currentData} />
            <Menu data={data} currentData={currentData} setCurrentData={setCurrentData} />
        </div>
    );
};

export default HomePage;