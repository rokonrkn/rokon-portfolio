import React from 'react';
import Home from '../../components/Home/Home';
import SideBar from '../Shared/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import BodyContent from '../../components/BodyContent/BodyContent';

const Layout = () => {
    return (
        <div className='flex'>
            <div className="">
                <SideBar></SideBar>
            </div>
            <div className="">
                <BodyContent></BodyContent>
                {/* <Outlet></Outlet> */}
            </div>
        </div>
    );
};

export default Layout;