import React from 'react';

const About = () => {
    return (
        <div className='p-10'>
            <div className="page-name">
                <h1 className='lg:text-3xl sm:text-2xl'>About Me</h1>
                <hr className='w-20' />
                <hr className='mt-2 w-10' />
            </div>
            <div className="about-content mt-10 ">
                <h1 className='lg:text-2xl'>Hi, i’m Rokonujjaman</h1>
                <p className='mt-5'>I'm a front-end developer passionate about crafting clean, responsive, and user-friendly web interfaces. I specialize in React, JavaScript, and modern UI design. I love turning creative ideas into smooth, interactive experiences.</p>
            </div>
        </div>
    );
};

export default About;