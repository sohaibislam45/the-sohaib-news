import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch("/categories.json").then(res=>res.json())
const CategoryNews = () => {
    const categories= use(categoryPromise);
    console.log(categories);
    return (
      <div>
        <h2 className="font-semibold text-accent-200">
          All Categories ({categories.length})
        </h2>
        <div className='grid gap-1 mt-2'>
          {categories.map((cat) => (
            <NavLink key={cat.id}
            className="btn bg-transparent border-none shadow-none hover:bg-base-300 text-accent"
            to={`/category/${cat.id}`}
            >{cat.name}</NavLink>
          ))}
        </div>
      </div>
    );
};

export default CategoryNews;