import React, { useState } from 'react';
import image from '../../assets/img/rokon.png'
import { Link } from 'react-router-dom';

const About = () => {

    const [education, setEducation] = useState([]);


    const educationData = [
        {
            date: "2019-2023",
            title: "Diploma in Computer Science Engineering",
            description: "Completed a Diploma in Computer Science with hands-on experience in programming, databases, and software development. Gained solid foundational knowledge and practical skills for real-world tech applications.",
        },
        {
            date: "2025- Present",
            title: "BSC in Computer Science Engineering",
            description: "Currently pursuing a Bachelor’s degree in Computer Science and Engineering, focusing on programming, data structures, algorithms, and software development.",
        },
    ];

    const experienceData = [
        {
            date: "2023-2024",
            title: "Web Development Internship – HRsoftBD",
            description: "Completed a web development internship at HRsoftBD, where I gained hands-on experience in building and maintaining websites using modern web technologies.",
        },
        {
            date: "2024- Present",
            title: "Front-End Developer–NextGen Innovation Ltd",
            description: "Currently working as a Front-End Developer at NextGen Innovation Ltd, focusing on building responsive and user-friendly web interfaces using modern technologies and best practices.",
        }
    ];


    return (
        <div className='md:p-10'>
            <div className="page-name">
                <h1 className='lg:text-3xl text-2xl'>About Me</h1>
                <hr className='w-20' />
                <hr className='mt-2 w-10' />
            </div>

            <div className="grid lg:grid-cols-2 mt-10 sm:grid-cols-1 gap-10 items-center p-6 bg-white rounded-2xl shadow-md">
                {/* Left Content */}
                <div className="space-y-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold text-gray-800">Hi, I’m Rokonujjaman</h1>
                        <p className="text-gray-600">
                            I'm a front-end developer passionate about crafting clean, responsive, and user-friendly web interfaces. I specialize in React, JavaScript, and modern UI design. I love turning creative ideas into smooth, interactive experiences.
                        </p>
                    </div>

                    {/* Personal Info */}
                    <div className="space-y-3">
                        <h2 className="text-xl font-semibold text-gray-800 border-b pb-1 w-fit">Personal Information</h2>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex gap-2"><span className="font-semibold">Name:</span> Md. Rokonujjaman</li>
                            <li className="flex gap-2"><span className="font-semibold">Age:</span> 22</li>
                            <li className="flex gap-2"><span className="font-semibold">Email:</span> rokonislam195@gmail.com</li>
                            <li className="flex gap-2"><span className="font-semibold">Address:</span> Dhaka, Bangladesh</li>
                        </ul>
                        <div className="btn2">
                            <Link to='/about' >
                                <button className='bg-[#D4C9BE] px-5 py-2 rounded-full mt-10 text-black about-button relative overflow-hidden'>Downloade CV</button>
                            </Link>
                            <Link to='/about' >
                                <button className='bg-[#D4C9BE] ml-2.5 px-5 py-2 rounded-full mt-10 text-black about-button relative overflow-hidden'>Hire me</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <img
                        src={image}
                        alt="Rokonujjaman"
                        className="rounded-2xl w-full max-w-sm object-cover shadow-lg"
                    />
                </div>
            </div>



            <div className="grid gap-10  lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 mt-20">
                <div className="education bg-[#222222] p-6 rounded-xl text-white">
                    <h2 className="text-2xl font-semibold  pb-1 w-fit mb-4">Education</h2>
                    <div className="vertical-timeline">
                        {educationData.map((item, index) => (
                            <div className="timeline-entry" key={index}>
                                <div className="timeline-dot" />
                                <div className="timeline-info">
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <span className="timeline-date">{item.date}</span>
                                    <p className="timeline-desc">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Experience Section */}
                <div className="experience bg-[#222222] p-6 rounded-xl text-white">
                    <h2 className="text-2xl font-semibold  pb-1 w-fit mb-4">Experience</h2>
                    <div className="vertical-timeline">
                        {experienceData.map((item, index) => (
                            <div className="timeline-entry" key={index}>
                                <div className="timeline-dot" />
                                <div className="timeline-info">
                                    <h3 className="timeline-title">{item.title}</h3>
                                    <span className="timeline-date">{item.date}</span>
                                    <p className="timeline-desc">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;