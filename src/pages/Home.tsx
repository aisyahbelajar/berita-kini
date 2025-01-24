import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import "../styles/animations.css";
import React, { useState, useEffect } from "react";
import usePosts from "../lib/posts.ts";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { start } from "repl";
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

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

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
              <div className="md:w-1 md:h-32 md:bg-gray-300 md:my-auto"></div>
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
              <div className="md:w-1 md:h-32 md:bg-gray-300 md:my-auto"></div>
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
          <div className="flex gap-5 justify-between items-stretch">
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
            <div className="relative rounded-lg p-1 transition-all duration-150 ease-in-out hover:scale-105 border mb-6">
              <input
                type="text"
                className="pl-2 p-2 text-base text-gray-700 bg-transparent rounded-lg focus:outline-none w-54 md:w-72"
                placeholder="Cari disini..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute right-1 top-1 bottom-1 p-2 text-white font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5044e4]">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7419 10.7744C12.7102 9.45309 13.1439 7.81489 12.9562 6.18755C12.7685 4.56021 11.9733 3.06374 10.7297 1.99753C9.48604 0.931319 7.88567 0.374002 6.24876 0.437075C4.61184 0.500148 3.05911 1.17896 1.90119 2.33771C0.743273 3.49645 0.0655718 5.04967 0.00366997 6.68663C-0.0582319 8.32359 0.500231 9.92356 1.56733 11.1664C2.63443 12.4093 4.13147 13.2035 5.75894 13.39C7.38641 13.5765 9.0243 13.1416 10.3449 12.1724H10.3439C10.3739 12.2124 10.4059 12.2504 10.4419 12.2874L14.2919 16.1374C14.4794 16.325 14.7338 16.4305 14.9991 16.4306C15.2643 16.4307 15.5188 16.3254 15.7064 16.1379C15.8941 15.9504 15.9995 15.696 15.9996 15.4308C15.9997 15.1655 15.8944 14.911 15.7069 14.7234L11.8569 10.8734C11.8212 10.8372 11.7827 10.8048 11.7419 10.7744ZM11.9999 6.9304C11.9999 7.65267 11.8577 8.36787 11.5813 9.03516C11.3049 9.70245 10.8997 10.3088 10.389 10.8195C9.87829 11.3302 9.27197 11.7353 8.60468 12.0117C7.93739 12.2881 7.22219 12.4304 6.49992 12.4304C5.77765 12.4304 5.06245 12.2881 4.39516 12.0117C3.72787 11.7353 3.12156 11.3302 2.61083 10.8195C2.10011 10.3088 1.69498 9.70245 1.41858 9.03516C1.14218 8.36787 0.999921 7.65267 0.999921 6.9304C0.999921 5.47171 1.57938 4.07276 2.61083 3.04131C3.64228 2.00986 5.04123 1.4304 6.49992 1.4304C7.95861 1.4304 9.35756 2.00986 10.389 3.04131C11.4205 4.07276 11.9999 5.47171 11.9999 6.9304Z"
                    fill="#333333"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {paginatedPosts.map((post, index) => (
              <Link
                to={`/news/${index + startIndex}`}
                key={index + startIndex}
                className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={post.thumbnail}
                  alt={post.description}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="p-6">
                  <h3 className="text-base font-bold mb-2 text-start">
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
          <div className="text-center mt-5 mb-10 flex justify-between">
            <p>
              Showing {startIndex + 1} to{" "}
              {endIndex > filteredPosts.length
                ? filteredPosts.length
                : endIndex}{" "}
              of {filteredPosts.length} results
            </p>
            <div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  {Array.from({ length: 4 }, (_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        href="#"
                        isActive={index + 1 === currentPage}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
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
    </div>
  );
}
