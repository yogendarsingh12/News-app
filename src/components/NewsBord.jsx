import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBord = ({category}) => {
  const [articles, setArticles] = useState([]); // fixed here

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=d5f8a0c52a014fc0b9436f8b51090f9f`;

      let response = await fetch(url);
      let data = await response.json();
      console.log('here is my data', data);
      setArticles(data.articles); // fixed here
    };
    fetchData();
  }, [category]);

  return (
    <div>
      <h1 className='text-center  text-amber-50 text-2xl'>Latest News</h1>
    
      <div className="container border-2 border-white  flex flex-wrap gap-4">
      {articles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          img={news.urlToImage}
          url={news.url}
          content={news.content}
        />
      ))}

      </div>
     
    </div>
  );
};

export default NewsBord;
