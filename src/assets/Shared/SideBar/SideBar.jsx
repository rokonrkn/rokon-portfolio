import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {

    const item = [
        {
            id: 1,
            name: "Home",
            link: "/"
        },
        {
            id: 2,
            name: "About",
            link: "/about"  
        },
        {
            id: 3,
            name: "Service",
            link: "/service"
        },
        {
            id: 4,
            name: "Portfolio",
            link: "/portfolio"
        },
        {
            id: 5,
            name: "Skill",
            link: "/skill"
        },
        {
            id: 6,
            name: "Contact",
            link: "/contact"
        }
    ]
    return (
        <div className='0'>
            <aside className=' bg-[#222222] text-white h-screen sidebar'>
                <div className="text-center pt-10">   <h1>RKN</h1></div>    
                <ul className='  flex flex-col gap-3 items-center justify-center mt-32 '>
                    {   
                        item.map(item => <Link key={item.id} to={item.link}> <li className='items-liist'>{item.name}</li></Link>)
                    }
                </ul>
            </aside>    
        </div>
    );
};

export default SideBar;