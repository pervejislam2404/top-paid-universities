import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            {/* heading-deign */}
            <div style={{backgroundColor: '#14279B', fontSize: '8rem !important'}} className="w-75 p-5 text-black fw-bolder mx-auto text-center mt-3 rounded">
                <h1 className="header">Let's have a look on most paid university in the world</h1>
            </div>
        </div>
    );
};

export default Header;