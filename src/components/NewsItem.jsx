import React from 'react';

const NewsItem = ({ title, description, url, img, content }) => {
  return (
    <div className="card flex flex-col flex-1 min-w-[250px] overflow-hidden shadow-lg hover:shadow-xl  m-2 p-0 bg-white rounded-2xl border border-gray-200">
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
        <img
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          src={img || '/placeholder.jpg'}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
      </div>
      <div className="flex flex-col flex-1 p-5 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-3">
          {description || content || 'No description available.'}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-6 py-2 transition-colors duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
