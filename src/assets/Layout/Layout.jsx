import React from 'react';
import Home from '../../components/Home/Home';
import SideBar from '../Shared/SideBar/SideBar';

const Layout = () => {
    return (
        <div className='flex'>
            <div className="">
                <SideBar></SideBar>
            </div>
            <div className="">
                <Home></Home>
            </div>
        </div>
    );
};

export default Layout;