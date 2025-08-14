import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../../image/Home/home.png'
import about from '../../../image/Home/about.png'
import service from '../../../image/Home/servie.png'
import portfolio from '../../../image/Home/portfolio.png'
import skill from '../../../image/Home/skiill.png'
import contact from '../../../image/Home/contact.png'

const SideBar = () => {

    const item = [
        {
            id: 1,
            name: "Home",
            link: "/",
            icon: home
        },
        {
            id: 2,
            name: "About",
            link: "/about",
            icon: about
        },
        {
            id: 3,
            name: "Service",
            link: "/service",
            icon: service
        },
        {
            id: 4,
            name: "Portfolio",
            link: "/portfolio",
            icon: portfolio
        },
        {
            id: 5,
            name: "Skill",
            link: "/skill",
            icon: skill
        },
        {
            id: 6,
            name: "Contact",
            link: "/contact",
            icon: contact
        }
    ]
    return (
        <div className='0'>
            <aside className=' bg-[#222222] text-white h-screen sidebar'>
                <div className="text-center pt-10">   <h1>RKN</h1></div>
                <ul className='  flex flex-col gap-3 ml-18 justify-center mt-32 '>
                    {
                        item.map(item => <Link key={item.id} to={item.link}>
                            <li className='items-liist flex gap-2   '>
                                {/* <img src={item.icon} alt="" /> */}
                                {item.name}
                            </li>
                        </Link>
                        )
                    }
                </ul>
            </aside>
        </div>
    );
};

export default SideBar;