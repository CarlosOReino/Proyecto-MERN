import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center py-3 bg-dark text-white'>
            <p>MyEdificio App</p> 
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </footer>
    );
};

export default Footer;