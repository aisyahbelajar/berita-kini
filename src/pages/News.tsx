import React from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/news';

export default function News() {
  return (
    <div>
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">Berita & Kegiatan</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <Link to={`/news/${news.id}`} key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <p className="text-green-600 text-sm mb-2">{news.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h3>
                <p className="text-gray-600">{news.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}