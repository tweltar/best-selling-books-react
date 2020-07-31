import React, {useState, useEffect} from 'react';
import './Content.css';
import Axios from 'axios';
import { appendApiKey } from "../../utils";

const Content = () => {

    const [Categories, setCategories] = useState([]);

    const fetchListName = async () => {
        const res = await Axios.get('names.json');
        setCategories(res.data);
    };

    useEffect(() => {
        fetchListName();
    }, []);

    return (
        <section className="content">
            <div className="category">
                <p>Category</p>
                <hr />
                {
                    Categories && Categories.map(category => console.log(category))
                }
            </div>
        </section>
    );
};

export default Content;