import React from 'react';
import './Category.css';

function Category({ category, setCategoryName, setUpdated, setListNameEncoded }) {
    return (
        <>
            <a onClick={() => {
                setCategoryName(category.display_name);
                setUpdated(category.updated);
                setListNameEncoded(category.list_name_encoded);
            }}>{category.display_name}</a>
            <hr className="separator" />
        </>
    );
};

export default Category;