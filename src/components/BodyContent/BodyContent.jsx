import React from 'react';
import { Outlet } from 'react-router-dom';

const BodyContent = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default BodyContent;