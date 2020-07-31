import React, {useState, useEffect} from 'react';
import './CategoryDetail.css';
import { appendApiKey } from '../utils';
import Axios from 'axios';
import Book from './Book';

const CategoryDetail = ({ categoryName, updated, listNameEncoded }) => {

    const [books, setBooks] = useState([]);
    const [num, setNum] = useState('10');

    const fetchBooks = async () => {

        const link = appendApiKey("current/" + listNameEncoded + ".json");
        try {
            const res = await Axios.get(link);
            setBooks(res.data.results.books);
            setNum(res.data.num_results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, [listNameEncoded]);

    return (
        <div className="category-details">
            <div className="cat-title">
                <div>
                    <p>Top {num} Best Selling Books of</p>
                    <h2>{categoryName}<span> - Updated {updated}</span></h2>
                </div>
                <input className="search-button" type="search" placeholder="Search by date...YYYY-MM-DD" />
            </div>
            <div className="books">
                {
                    books && books.map(book => <Book key={book.rank} book={book} />)
                }
            </div>
        </div>
    );
};

export default CategoryDetail;