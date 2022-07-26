import React from 'react';

const Footer = () => {
    const date =new Date().getFullYear();
    return (
        <footer className='footer'>
            <p>&#169; Copyright { date }</p>

        </footer>
    )
}

export default Footer;