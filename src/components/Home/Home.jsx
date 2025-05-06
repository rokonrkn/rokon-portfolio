import React from 'react';
import rokon from '../../assets/img/rokon.png'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center p-16'>
            <div className="intro-content ">
                <h4 className='text-3xl'>Hello, My name is <span className='text-[#D4C9BE]'>Rokon.</span></h4>
                <h4 className='text-2xl flex gap-2'>i’m a
                    <span className="text-[#D4C9BE]">
                        <Typewriter
                            options={{
                                strings: ['Frontend Developer', 'MERN Stack Developer', 'React Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h4>
                <p className='mt-5'>I'm a front-end developer passionate about crafting clean, responsive, and user-friendly web interfaces. I specialize in React, JavaScript, and modern UI design. I love turning creative ideas into smooth, interactive experiences.</p>
                <Link to='/about' >
                    <button className='bg-[#D4C9BE] px-5 py-2 rounded-full mt-10 text-black about-button relative overflow-hidden'>More About Me</button>
                </Link>
            </div>
            <div className="intro-content ">
                <img className='' src={rokon} alt="" />
            </div>
        </div>
    );
};

export default Home;