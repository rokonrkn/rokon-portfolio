import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// icons/images
import home from "../../../image/Home/home.png";
import about from "../../../image/Home/about.png";
import service from "../../../image/Home/servie.png";
import portfolio from "../../../image/Home/portfolio.png";
import skill from "../../../image/Home/skiill.png";
import contact from "../../../image/Home/contact.png";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const item = [
    { id: 1, name: "Home", link: "/", icon: home },
    { id: 2, name: "About", link: "/about", icon: about },
    { id: 3, name: "Service", link: "/service", icon: service },
    { id: 4, name: "Portfolio", link: "/portfolio", icon: portfolio },
    { id: 5, name: "Skill", link: "/skill", icon: skill },
    { id: 6, name: "Contact", link: "/contact", icon: contact },
  ];

  return (
    <div>
      {/* Mobile Top Navbar */}
      <div className="md:hidden flex items-center justify-between bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold">RKN</h1>
        <button onClick={() => setIsOpen(true)} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 
          bg-gray-900 text-white shadow-lg z-50
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:block h-screen 
        `}
      >
        {/* Header + Close (only mobile) */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold">RKN</h1>
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 mt-10 px-6 uppercase     ">
          {item.map((item) => (
            <NavLink
            className={({ isActive }) => (isActive ? "text-gray-300" : "")}
              key={item.id}
              to={item.link}
              onClick={() => setIsOpen(false)} // close sidebar on mobile click
            >
              <li className="flex gap-3 items-center cursor-pointer hover:text-gray-300">
                <img src={item.icon} alt={item.name} className="w-6 h-6" />
                {item.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default SideBar;
