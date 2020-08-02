import React, {useState, useEffect} from 'react';
import './Content.css';
import Axios from 'axios';
import { appendApiKey } from '../utils';
import Category from './Category';
import CategoryDetail from './CategoryDetail';

const Content = () => {

    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState("Combined Print & E-Book Fiction");
    const [updated, setUpdated] = useState("Weekly");
    const [listNameEncoded, setListNameEncoded] = useState("combined-print-and-e-book-fiction");
    
    const fetchAllListNames = async () => {
        const link = appendApiKey("names.json");
        
        try {
            const res = await Axios.get(link);
            setCategories(res.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllListNames();
    }, []);

    return (
        <section className="content">
            <div className="category">
                <p>Category</p>
                {
                    categories && categories.map(category => <Category key={category.list_name_encoded} category={category} setCategoryName={setCategoryName} setUpdated={setUpdated} setListNameEncoded={setListNameEncoded} />)
                }
            </div>
            <CategoryDetail categoryName={categoryName} updated={updated} listNameEncoded={listNameEncoded} />
        </section>
    );
};

export default Content;