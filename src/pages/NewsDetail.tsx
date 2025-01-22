import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { newsData } from "../data/news";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return formatter.format(date);
};

export default function NewsDetail() {
  const { id } = useParams(); // Mendapatkan ID dari URL
  const { posts } = usePosts(); // Mengakses data berita
  const post = posts[parseInt(id)]; // Mencari berita berdasarkan ID

  const news = newsData.find((n) => n.id === Number(id));

  if (!news) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <p>Berita tidak ditemukan</p>
      </div>
    );
  }

  if (!posts) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <p>Berita tidak ditemukan</p>
      </div>
    );
  }

  const [comments, setComments] = useState([
    {
      id: 1,
      name: "UJANG YUSMEIDI S.P., M.Agr.",
      date: "28 Mar 2024 11:15",
      profileImg: "/assets/profile2.png",
      message:
        "Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh? Karena saya mau download ada konfirmasi bahwa TOTP aktivasi salah. Bagaimana ya solusinya?",
    },
  ]);
  const [newComment, setNewComment] = useState(""); // Untuk input komentar baru

  // Fungsi untuk menambah komentar baru
  const handleAddComment = () => {
    if (newComment.trim() === "") return; // Validasi input kosong
    const newId = comments.length + 1;

    setComments([
      ...comments,
      {
        id: newId,
        name: "Pengguna Baru", // Anda bisa mengganti ini dengan data pengguna yang login
        date: new Date().toLocaleString("id-ID", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        profileImg: "/assets/profile1.png", // Default gambar profil
        message: newComment,
      },
    ]);
    setNewComment(""); // Reset input
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="md:grid md:grid-cols-4">
        <div className="col-span-3">
          {/* breadcrumb */}
          <div className="py-20">
            <div className="px-4">
              <div className="w-full h-9"></div>

              <h1 className="text-4xl font-bold text-black text-left flex gap-3 ml-6">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.70714 0.500062C8.51962 0.312591 8.26531 0.207275 8.00014 0.207275C7.73498 0.207275 7.48067 0.312591 7.29314 0.500062L0.646143 7.14606C0.599655 7.19255 0.562779 7.24774 0.53762 7.30848C0.512461 7.36922 0.499512 7.43432 0.499512 7.50006C0.499512 7.56581 0.512461 7.63091 0.53762 7.69165C0.562779 7.75239 0.599655 7.80757 0.646143 7.85406C0.74003 7.94795 0.867368 8.00069 1.00014 8.00069C1.06589 8.00069 1.13099 7.98774 1.19173 7.96259C1.25247 7.93743 1.30766 7.90055 1.35414 7.85406L2.00014 7.20706V12.5001C2.00014 12.8979 2.15818 13.2794 2.43948 13.5607C2.72079 13.842 3.10232 14.0001 3.50014 14.0001H12.5001C12.898 14.0001 13.2795 13.842 13.5608 13.5607C13.8421 13.2794 14.0001 12.8979 14.0001 12.5001V7.20706L14.6461 7.85406C14.74 7.94795 14.8674 8.00069 15.0001 8.00069C15.1329 8.00069 15.2603 7.94795 15.3541 7.85406C15.448 7.76018 15.5008 7.63284 15.5008 7.50006C15.5008 7.36729 15.448 7.23995 15.3541 7.14606L13.0001 4.79306V1.50006C13.0001 1.36745 12.9475 1.24028 12.8537 1.14651C12.7599 1.05274 12.6328 1.00006 12.5001 1.00006H11.5001C11.3675 1.00006 11.2404 1.05274 11.1466 1.14651C11.0528 1.24028 11.0001 1.36745 11.0001 1.50006V2.79306L8.70714 0.500062ZM13.0001 6.20706V12.5001C13.0001 12.6327 12.9475 12.7598 12.8537 12.8536C12.7599 12.9474 12.6328 13.0001 12.5001 13.0001H3.50014C3.36754 13.0001 3.24036 12.9474 3.14659 12.8536C3.05282 12.7598 3.00014 12.6327 3.00014 12.5001V6.20706L8.00014 1.20706L13.0001 6.20706Z"
                    fill="#333333"
                  />
                </svg>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink className="flex gap-3">
                        <Link to="/">Beranda</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink>
                        <Link to="/Berita">{news.tag}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Detail</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </h1>
            </div>
          </div>
          {/* content berita */}
          <div className="">
            <div className="max-w-4xl px-10">
              <h2 className="font-semibold text-4xl mb-8">{post.title}</h2>
              <div className="flex gap-3 mb-6">
                <p className="text-blue-700 text-base font-semibold">
                  Nasional
                </p>
                <div className="w-1 h-1 rounded-full bg-gray-300 my-auto"></div>
                <p>{formatDate(post.pubDate)}</p>
              </div>
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              <p className="text-gray-400 text-sm mb-6">{post.description}</p>

              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          </div>
          {/* KOMENTAR */}
          <div>
            <div className="flex gap-5 mx-10 mt-12">
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
                Komentar
              </h1>
            </div>
            <div className="max-w-4xl px-10">
              {/* Formulir Komentar */}
              <div className="p-4">
                <div className="flex gap-5">
                  <img
                    src="/assets/profile1.png"
                    alt=""
                    className="w-16 h-16"
                  />
                  <div className="flex flex-col w-full gap-3">
                    <Textarea
                      placeholder="Ketik komentar Anda di sini."
                      className="w-full h-36"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <Button
                      className="bg-blue-500 text-white rounded-lg hover:bg-blue-400 w-20"
                      onClick={handleAddComment}
                    >
                      Kirim
                    </Button>
                  </div>
                </div>
              </div>
              <hr />

              {/* Daftar Komentar */}
              {comments.map((comment) => (
                <div className="p-4" key={comment.id}>
                  <div className="flex gap-5">
                    <img
                      src={comment.profileImg}
                      alt=""
                      className="w-16 h-16"
                    />
                    <div className="w-full gap-3">
                      <div className="flex gap-3 mb-6">
                        <p className="text-blue-700 text-base font-semibold">
                          {comment.name}
                        </p>
                        <svg
                          width="5"
                          height="6"
                          viewBox="0 0 5 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                        >
                          <circle cx="2.5" cy="3" r="2.5" fill="#BDBDBD" />
                        </svg>
                        <p>{comment.date}</p>
                      </div>
                      <p className="mb-4">{comment.message}</p>
                      <a href="#" className="text-blue-600 mt-12">
                        Balas
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-5 ml-16 my-6">
                    <img
                      src="/assets/profile3.png"
                      alt=""
                      className="w-16 h-16"
                    />
                    <div className="w-full gap-3">
                      <div className="flex gap-3 mb-6">
                        <p className="text-blue-700 text-base font-semibold">
                          UJANG YUSMEIDI S.P., M.Agr.
                        </p>
                        <svg
                          width="5"
                          height="6"
                          viewBox="0 0 5 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                        >
                          <circle cx="2.5" cy="3" r="2.5" fill="#BDBDBD" />
                        </svg>
                        <p>28 Mar 2024 11:15</p>
                      </div>
                      <p className="mb-4">
                        Mohon maaf, apakah sertifikatnya sudah tidak dapat
                        diunduh ? Karena saya mau download ada konfirmasi bahwa
                        TOTP aktivasi salah Bagaimana ya solusinya ?
                      </p>
                      <a href="" className="text-blue-600 mt-12">
                        Balas
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* berita lain */}
          <div className="py-16">
            <div className=" px-4">
              <div className="flex gap-5 ">
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
              <div className="grid md:grid-cols-3 gap-8">
                {posts.slice(0, 3).map((post, index) => (
                  <Link
                    to={`/news/${index}`}
                    key={index}
                    className="bg-white rounded-lg  overflow-hidden hover:shadow-xl transition "
                  >
                    <img
                      src={post.thumbnail}
                      alt={post.description}
                      className="w-auto h-48 object-cover rounded-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-base font-bold  mb-2 text-start">
                        {post.title}
                      </h3>
                      <div className="flex gap-3">
                        <p className="text-blue-700 text-base font-semibold">
                          Nasional
                        </p>
                        <div className="w-1 h-1 rounded-full bg-gray-300 my-auto"></div>

                        <p>{formatDate(post.pubDate)}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* BERITA LAINNYA */}
        <div className="w-full py-20">
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
              <div className="grid grid-cols-1 ">
                <div className="static text-center transform transition-transform duration-300 hover:scale-105 flex gap-4">
                  <div className="rounded-full w-4/5">
                    <div className="">
                      <div className="absolute -top-2 -left-3 rounded-full p-0.5 w-8 h-8 bg-gray-900 justify-center">
                        <p className="text-white ">1</p>
                      </div>
                      <img
                        src="/assets/berita1.png"
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
                        src="/assets/berita2.png"
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
                        src="/assets/berita3.png"
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="">
                      <h3 className="text-base font-bold  mb-2 text-start">
                        Kementerian BUMN Mulai Uji Coba Pegawai Kerja 4 Hari
                        Sepekan
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
        </div>
      </div>
    </div>
  );
}
