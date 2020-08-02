import React, {useState, useEffect} from 'react';
import './CategoryDetail.css';
import { appendApiKey } from '../utils';
import Axios from 'axios';
import Book from './Book';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoreAboutBook from './MoreAboutBook';

const CategoryDetail = ({ categoryName, updated, listNameEncoded }) => {

    const [books, setBooks] = useState([]);
    const [book, setBook] = useState({});
    const [num, setNum] = useState('10');
    const [searchValue, setSearchValue] = useState("");
    const [publishedDate, setPublishedDate] = useState("");
    const [previousPublishedDate, setPreviousPublishedDate] = useState("");
    const [publishedDateDesc, setPublishedDateDesc] = useState("");

    const fetchBooks = async () => {

        const link = appendApiKey("current/" + listNameEncoded + ".json");
        try {
            const res = await Axios.get(link);
            setBooks(res.data.results.books);
            setNum(res.data.num_results);
            setPublishedDate(res.data.results.published_date);
            setPreviousPublishedDate(res.data.results.previous_published_date);
            setPublishedDateDesc(res.data.results.published_date_description);
        } catch (error) {
            console.log(error);
        }
    };

    const searchByDate = async (e) => {
        e.preventDefault();
        
        const link = appendApiKey(searchValue + "/" + listNameEncoded + ".json");
        try {
            const res = await Axios.get(link);
            setBooks(res.data.results.books);
            setNum(res.data.num_results);
            setPublishedDate(res.data.results.published_date);
            setPreviousPublishedDate(res.data.results.previous_published_date);
            setPublishedDateDesc(res.data.results.published_date_description);
        } catch (error) {
            console.log(error);
            alert("Invalid Date");
        }
    };

    useEffect(() => {
        fetchBooks();
    }, [listNameEncoded]);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="category-details">
                        <div className="cat-title">
                            <div>
                                <p>Top {num} Best Selling Books of</p>
                                <h2>{categoryName}<span> - Updated {updated}</span></h2>
                                {
                                    publishedDate && previousPublishedDate && <p style={{fontSize: '85%', marginTop: '3px'}}>Published Date: {previousPublishedDate} - {publishedDate}</p>
                                }
                                <p style={{fontSize: '80%', marginTop: '3px'}}>{
                                    publishedDateDesc==="latest" ? "Showing latest results" : "Showing results for " + searchValue
                                }</p>
                            </div>
                            <form className="search" onSubmit={(e) => {searchByDate(e);}}>
                                <input className="search-bar" type="date" placeholder="Search by date... yyyy-mm-dd" onChange={(e) => setSearchValue(e.target.value)} />
                                <i className="fas fa-search search-button" onClick={(e) => searchByDate(e)}></i>
                            </form>
                        </div>
                        <div className="books">
                        {
                            books && books.map(book => <Book key={book.rank} book={book} setBook={setBook} />)
                        }
                        </div>
                    </div>
                </Route>
                <Route exact path="/about">
                    <MoreAboutBook book={book} />
                </Route>
            </Switch>
        </Router>
    );
};

export default CategoryDetail;