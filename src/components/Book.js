import React from 'react';
import './Book.css';
import { Link } from 'react-router-dom';

const Book = ({book, setBook}) => {
    return (
        <div className="book">
            <h1>{book.rank}</h1>
            <div>
                {
                    book.weeks_on_list===1 ? <p style={{fontSize: 80+'%', margin: '5px 0'}}>New this week</p> :
                        book.weeks_on_list===0 ? <p>&nbsp;</p> :
                            <p style={{fontSize: 80+'%', margin: '5px 0'}}>{book.weeks_on_list} weeks on the list</p>
                }
                <div className="book-details">
                    <img src={book.book_image} alt={book.title} />
                    <div className="about-book">
                        <div>
                            <h3 style={{fontSize: 120+'%', letterSpacing: '1pt'}}>{book.title}</h3>
                            <p style={{fontSize: 87+'%'}}>by {book.author}</p>
                            <br />
                            <p style={{fontSize: 78+'%'}}><i>{book.description}</i></p>
                        </div>
                        <Link to="/about" onClick={() => setBook(book)} className="more-about-book" style={{textDecoration: 'none'}}>
                            More about this book
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;