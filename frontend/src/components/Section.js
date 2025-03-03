import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Cards from './Cards';

const Section = ({ children }) => {
    return (
        <div className='layout'>
            <Header />
            <main className='main'>
                {children}
                <Cards />
            </main>
            <Footer />
        </div>
    );
};

export default Section;