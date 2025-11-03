import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategorySingleNews = () => {
    const {id} = useParams();
    const data= useLoaderData();
    console.log(data);
    console.log(id);
    return (
        <div>
            <p>News - {id}</p>
        </div>
    );
};

export default CategorySingleNews;