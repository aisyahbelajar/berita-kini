import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import "../styles/animations.css";
import React, { useState, useEffect } from "react";
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

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 3;

  const { posts, setPosts } = usePosts();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api-berita-indonesia.vercel.app/cnbc/terbaru/"
        );
        const data = await response.json();
        setPosts(data.data.posts);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);
  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="">
      {/* Hero Section */}
      <HeroSection />

      {/* Mengapa Memilih Kami */}
      <div className="py-16 ">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-start mb-12">
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
              <h1 className="font-bold text-black text-2xl capitalize">
                Berita Terpopuler
              </h1>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 m-4">
            <div className="static text-center transform transition-transform duration-300 hover:scale-105 flex gap-4">
              <div className="rounded-full w-4/5">
                <div className="">
                  <div className="absolute -top-2 -left-3 rounded-full p-0.5 w-8 h-8 bg-gray-900 justify-center">
                    <p className="text-white ">1</p>
                  </div>
                  <img
                    src="https://i.imgur.com/3AcZSB8.png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="my-3">
                <div className="">
                  <h3 className="text-base font-bold  mb-2 text-start">
                    Kenapa Eks Jenderal Israel Kritik Cara IDF Bebaskan 4
                    Sandera Hamas?
                  </h3>
                  <div className="flex gap-3">
                    <p className="text-blue-700 text-base font-semibold">
                      Politik
                    </p>
                    <div className="w-1 h-1 rounded-full bg-gray-300 my-auto"></div>

                    <p>22 Jan 2024</p>
                  </div>
                </div>
              </div>
              <div className="w-1 h-32 bg-gray-300 my-auto"></div>
            </div>
            <div className="static text-center transform transition-transform duration-300 hover:scale-105 flex gap-4">
              <div className="rounded-full w-4/5">
                <div className="">
                  <div className="absolute -top-2 -left-3 rounded-full p-0.5 w-8 h-8 bg-gray-900 justify-center">
                    <p className="text-white ">2</p>
                  </div>
                  <img
                    src="https://i.imgur.com/UaoQULz.png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="my-3">
                <div className="">
                  <h3 className="text-base font-bold  mb-2 text-start">
                    Daftar 6 Lahan Tambang Jatah Ormas Agama, NU Dapat Bekas
                    Grup Bakrie
                  </h3>
                  <div className="flex gap-3">
                    <p className="text-blue-700 text-base font-semibold">
                      Nasional
                    </p>
                    <div className="w-1 h-1 rounded-full bg-gray-300 my-auto"></div>

                    <p>22 Jan 2024</p>
                  </div>
                </div>
              </div>
              <div className="w-1 h-32 bg-gray-300 my-auto"></div>
            </div>
            <div className="static text-center transform transition-transform duration-300 hover:scale-105 flex gap-4">
              <div className="rounded-full w-4/5">
                <div className="">
                  <div className="absolute -top-2 -left-3 rounded-full p-0.5 w-8 h-8 bg-gray-900 justify-center">
                    <p className="text-white ">3</p>
                  </div>
                  <img
                    src="https://i.imgur.com/rXV2wPq.png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="my-3">
                <div className="">
                  <h3 className="text-base font-bold  mb-2 text-start">
                    Kementerian BUMN Mulai Uji Coba Pegawai Kerja 4 Hari Sepekan
                  </h3>
                  <div className="flex gap-3">
                    <p className="text-blue-700 text-base font-semibold">
                      Nasional
                    </p>
                    <div className="w-1 h-1 rounded-full bg-gray-300 my-auto"></div>

                    <p>22 Jan 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Berita Terbaru */}
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

      {/* CAROUSEL */}
      <div className="mb-20 max-w-screen-xl mx-auto">
        <div id="indicators-carousel" className="relative w-full">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className={`${
                  activeSlide === index ? "block" : "hidden"
                } duration-700 ease-in-out`}
                data-carousel-item={
                  activeSlide === index ? "active" : undefined
                }
              >
                <img
                  src={`https://i.imgur.com/b3NWbNU.png`}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse -bottom-8 left-1/2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  activeSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-current={activeSlide === index}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
              ></button>
            ))}
          </div>

          <button
            type="button"
            className="absolute w-32 md:w-72 top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
          ></button>
          <button
            type="button"
            className="absolute w-32 md:w-72 top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          ></button>
        </div>
      </div>
    </div>
  );
}
