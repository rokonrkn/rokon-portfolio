import React, { useEffect, useState } from 'react';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/project.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) =>
        console.error('Error fetching project data:', error)
      );
  }, []);

  return (
    <div>
      <div className="page-name">
        <h1 className="lg:text-3xl text-2xl">Portfolio</h1>
        <hr className="w-20" />
        <hr className="mt-2 w-10" />
      </div>
      <h3 className='text-2xl font-semibold mt-10'>My Latest Project</h3>

      <div className="mt-10">
        {projects.map((project, index) =>
          index % 2 === 0 ? (
            <div
              key={project.id}
              className="mb-10 p-6 bg-[#222222] rounded-xl text-white grid md:grid-cols-2 sm:grid-cols-1 gap-6"
            >
              <div className="portfolio-card relative">
                <img src={project.img} alt={project.title} />
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="overlay flex items-center justify-center">
                    <div className="text">View Project</div>
                  </div>
                </Link>
              </div>
              <div>
                <h2 className="text-2xl font-semibold pb-1 w-fit mb-4 mt-4">
                  {project.title}
                </h2>
                <p className="mb-4">{project.description}</p>
                <h4 className="text-xl mb-2">Tools:</h4>
                <p>{project.tools}</p>
                <div>
                  <button className="bg-[#D4C9BE] px-5 py-2  rounded-full mt-10 text-black about-button relative overflow-hidden">
                    <i></i><span>Live Demo</span>
                  </button>
                  <button className="bg-[#D4C9BE] ml-2.5 px-5 py-2 rounded-full mt-10 text-black about-button relative overflow-hidden">
                    Github
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={project.id}
              className="mb-10 p-6 bg-[#222222] rounded-xl text-white grid md:grid-cols-2 sm:grid-cols-1 gap-6"
            >
              <div>
                <h2 className="text-2xl font-semibold pb-1 w-fit mb-4 mt-4">
                  {project.title}
                </h2>
                <p className="mb-4">{project.description}</p>
                <h4 className="text-xl mb-2">Tools:</h4>
                <p>{project.tools}</p>
                <div>
                  <button className="bg-[#D4C9BE] px-5 py-2 rounded-full mt-10 text-black about-button relative overflow-hidden">
                    Live Demo
                  </button>
                  <button className="bg-[#D4C9BE] ml-2.5 px-5 py-2 rounded-full mt-10 text-black about-button relative overflow-hidden">
                    Source Code
                  </button>
                </div>
              </div>
              <div className="portfolio-card relative">
                <img src={project.img} alt={project.title} />
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="overlay flex items-center justify-center">
                    <div className="text">View Project</div>
                  </div>
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Portfolio;
