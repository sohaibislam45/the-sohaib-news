import React from 'react';
import { useParams } from 'react-router';

const CategorySingleNews = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <p>News - {id}</p>
        </div>
    );
};

export default CategorySingleNews;