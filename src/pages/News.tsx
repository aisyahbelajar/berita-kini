import React from "react";
import { Link } from "react-router-dom";
import usePosts from "../lib/posts.ts";
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return formatter.format(date);
};

export default function News() {
  const { posts, setPosts } = usePosts();
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-5">
          <svg
            width="4"
            height="35"
            viewBox="0 0 4 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.43042"
              width="3.99756"
              height="34"
              rx="1.99878"
              fill="#0090FF"
            />
          </svg>
          <h1 className="font-bold text-black text-2xl capitalize mb-6">
            Rekomendasi Untuk Anda
          </h1>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {posts.slice(0, 8).map((post, index) => (
            <Link
              to={`/news/${index}`}
              key={index}
              className="bg-white rounded-lg  overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={post.thumbnail}
                alt={post.description}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-6">
                <h3 className="text-base font-bold  mb-2 text-start">
                  {post.title}
                </h3>
                <div className="flex gap-3">
                  <p className="text-blue-700 text-base font-semibold">
                    Terbaru
                  </p>
                  <div className="w-1 h-1 rounded-full bg-gray-300 my-auto"></div>

                  <p>{formatDate(post.pubDate)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10 flex">
          <p>Showing 1 to 19 of 87 results</p>
        </div>
      </div>
    </div>
  );
}
