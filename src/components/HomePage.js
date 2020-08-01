import React from 'react';
import './HomePage.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <hr/>
            <Content />
            <Footer />
        </div>
    );
};

export default HomePage;