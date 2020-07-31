import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1 className="title"><i className="fas fa-book-open"></i>Best Selling Books of the United States</h1>
            <h5>By <a href="https://www.nytimes.com" target="_blank" rel="noopener noreferrer">New York Times</a></h5>
        </header>
    );
};

export default Header;