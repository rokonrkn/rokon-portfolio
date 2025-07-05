import React from 'react';
import Home from '../../components/Home/Home';
import SideBar from '../Shared/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import BodyContent from '../../components/BodyContent/BodyContent';

const Layout = () => {
    return (
        // <div className='flex'>
        //     <div className="">
        //         <SideBar></SideBar>
        //     </div>
        //     <div className="overflow-auto">
        //         <BodyContent></BodyContent>
        //         {/* <Outlet></Outlet> */}
        //     </div>
        // </div>
        <div className="flex h-screen">
            <div className="">
                <SideBar />
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                <BodyContent />
                {/* <Outlet /> */}
            </div>
        </div>

    );
};

export default Layout;