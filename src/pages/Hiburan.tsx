import { Link } from "react-router-dom";
import usePosts from "../lib/posts.ts";
import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return formatter.format(date);
};

export default function Hiburan() {
  const { posts, setPosts } = usePosts();
  const { nama, setNama } = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          " https://api-berita-indonesia.vercel.app/cnn/hiburan/"
        );
        const data = await response.json();
        setPosts(data.data.posts);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          " https://api-berita-indonesia.vercel.app/"
        );
        const data = await response.json();
        setNama(data.data.nama);
        console.log(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);

  // Pagination

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  // Filter posts berdasarkan pencarian
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  return (
    <div className="py-28">
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
              Hiburan
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
                    Hiburan
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
            {endIndex > filteredPosts.length ? filteredPosts.length : endIndex}{" "}
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
    </div>
  );
}
