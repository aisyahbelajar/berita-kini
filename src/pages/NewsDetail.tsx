import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsData } from '../data/news';
import { ArrowLeft } from 'lucide-react';

export default function NewsDetail() {
  const { id } = useParams();
  const news = newsData.find(n => n.id === Number(id));

  if (!news) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <p>Berita tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">{news.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/news" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Berita
        </Link>
        
        <img src={news.image} alt={news.title} className="w-full h-96 object-cover rounded-lg mb-8"/>
        
        <p className="text-green-600 text-sm mb-4">{news.date}</p>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 leading-relaxed">{news.content}</p>
        </div>
      </div>
    </div>
  );
}