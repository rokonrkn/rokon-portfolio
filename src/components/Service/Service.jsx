import React, { useEffect, useState } from 'react';

const Service = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch('/services.json') // ✅ Now loading from public
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-black text-white px-6 py-12">
      <h2 className="text-3xl font-semibold mb-4">Services</h2>
      <hr className="w-20 border-white mb-1" />
      <hr className="w-10 border-white mb-8" />

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`bg-white text-black p-6 rounded-xl relative shadow-md hover:shadow-xl transition-all duration-300 ${
              index === 0 ? 'border-0 border-blue-400' : ''
            }`}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#D4C9BE] p-3 rounded-full border-2 border-[#000000]">
              <img
                src={`/serviceIcon/${service.icon}`}
                alt={service.title}
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
