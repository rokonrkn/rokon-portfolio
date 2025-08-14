import React from 'react';
import logo from '../../assets/img/rokon.png';

const Loader = () => {
    return (
        <div className="loader-child">
            <div className='loader '>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Loader;