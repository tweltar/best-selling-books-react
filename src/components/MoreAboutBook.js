import React from 'react';
import './MoreAboutBook.css';
import { Link } from 'react-router-dom';

const MoreAboutBook = ({book}) => {
    return (
        <div className="more-on-book">
            <Link to="/" className="back" href=""><i className="fas fa-angle-left back-arrow"></i>Back</Link>
            <div className="book-desc">
                <div className="book-desc-col">
                    <h2>{book.title}</h2>
                    <p>by {book.author}</p>
                    <br/><br/>
                    { book.contributor && <p style={{fontSize: '85%'}}>Contributed {book.contributor}</p> }
                    { book.publisher && <p style={{fontSize: '85%'}}>Published by {book.publisher}</p> }
                    <br/>
                    { book.descripption && <q><i>{book.description}</i></q> }
                    <br/><br/>
                    <p>Buy book from:&nbsp;&nbsp; 
                    {
                        book.buy_links && book.buy_links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"><i className="add-color">{link.name},</i> </a>)
                    }
                    </p><br/>
                    { book.article_chapter_link && <p>Read article chapter <a href={book.article_chapter_link} target="_blank" rel="noopener noreferrer"><i className="add-color">here</i></a>!</p>}
                    { book.first_chapter_link && <p>Read first chapter <a href={book.first_chapter_link} target="_blank" rel="noopener noreferrer"><i className="add-color">here</i></a>!</p>}
                    { book.book_review_link && <p>Read book review <a href={book.book_review_link} target="_blank" rel="noopener noreferrer"><i className="add-color">here</i></a>!</p>}
                    { book.sunday_review_link && <p>Read Sunday review <a href={book.sunday_review_link} target="_blank" rel="noopener noreferrer"><i className="add-color">here</i></a>!</p>}
                </div>
                <img src={book.book_image} alt={book.title} />    
            </div>
        </div>
    );
};

export default MoreAboutBook;