import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategorySingleNews = () => {
    const {id} = useParams();
    const data= useLoaderData();
    const [allnews, setAllNews] = useState([]);
    useEffect(()=>{
        if(id=='0'){
            setAllNews(data);
            return;
        } else if(id=='1'){
            const filterNews = data.filter(
              (news) => news.others.is_today_pick == true
            );
            setAllNews(filterNews);
            return;
        } else {
            const filterNews = data.filter((news) => news.category_id == id);
            setAllNews(filterNews);
        }
    },[data, id])
    return (
      <div>
        <h1 className="font-semibold mb-3">
          Total <span className='text-secondary'>{allnews.length}</span> News found
        </h1>
        {allnews.map((card) => (
          <NewsCard key={card.id} card={card}></NewsCard>
        ))}
      </div>
    );
};

export default CategorySingleNews;