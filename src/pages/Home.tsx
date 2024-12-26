import React from "react";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { newsData } from "../data/news";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative bg-[url('https://cdn.discordapp.com/attachments/1304080685845450784/1321847515326447766/IMG-20241226-WA0016.jpg?ex=676eb9ee&is=676d686e&hm=a974d319bde23106faccfa12cbdf3b6410548d55f11b6f53a58cca9371e157aa&')] bg-cover bg-center h-screen w-full">
        <div className="absolute inset-0 bg-green-900 opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-7xl uppercase">
              <span className="text-green-see">SMP {""}</span>
              <span className="text-white">
                TAMAN <br />
                PENDIDIKAN ISLAM
              </span>
              <span className="text-green-see">
                <br />
                GEDANGAN
              </span>
            </h1>
            <p className="text-xl mb-8">
              Membentuk Generasi Unggul, Berkarakter, dan Siap Bersaing
            </p>
            <Link
              to="/contact"
              className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
      {/* Mengapa Memilih Kami */}
      <div className="py-16 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-bold text-slate-800 text-4xl capitalize mb-6">
              Kenapa Harus{" "}
              <span className="text-green-see">
                SMP <br />
                Taman Pendidikan Islam Gedangan
              </span>
              ?
            </h1>
            <div className="w-40 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-green-50 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="bg-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Akreditasi B
              </h3>
              <p className="text-gray-500">
                Terakreditasi B dengan fasilitas modern
              </p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="bg-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Prestasi
              </h3>
              <p className="text-gray-500">
                Berbagai prestasi tingkat nasional
              </p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="bg-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Guru Profesional
              </h3>
              <p className="text-gray-500">Tim pengajar berpengalaman</p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <div className="bg-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">
                Kurikulum
              </h3>
              <p className="text-gray-500">Kurikulum terintegrasi industri</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profil Kepala Sekolah */}
      <div className="py-16 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="items-center justify-center flex">
              <img
                src="https://cdn.discordapp.com/attachments/1304080685845450784/1321805507350237265/removal.ai_0b92d2dd-19d4-43a6-b185-e8be0f6d017e-image-1.png?ex=676e92ce&is=676d414e&hm=eae412544e9eede71ec88b0e5c22ce3eaaf445ea3742e18a05ffc76a65207b60&"
                alt="Kepala Sekolah"
                className="group relative bg-gradient-to-br from-green-800 via-green-500 to-green-200 rounded-lg text-white transform-gpu transition-transform duration-500 cursor-pointer hover:scale-105 hover:rotate-x-10 hover:rotate-y-10 hover:shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Profil Kepala Sekolah
              </h2>
              <div className="w-20 h-1 bg-green-600 mb-6"></div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Dyah Agustin Ayuningtiyas, S.Pd., M.Pd
              </h3>
              <p className="text-gray-600 mb-6">
                Dengan pengalaman lebih dari 20 tahun di dunia pendidikan, Dr.
                Dyah Agustin Ayuningtiyas, S.Pd., M.Pd memimpin SMP TPI Gedangan
                dengan visi yang kuat untuk mengembangkan pendidikan islam yang
                berkualitas.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>• S3 Manajemen Pendidikan - Universitas Indonesia</p>
                <p>• Best Principal Award 2023</p>
                <p>• Penasehat Asosiasi Kepala Sekolah Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visi & Misi
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center justify-center al bg-green-50 rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
                Visi
              </h3>
              <p className="text-gray-600 flex items-center">
                Menciptakan generasi Islami yang cerdas, berakhlak mulia, dan
                berprestasi di bidang akademik maupun non-akademik, serta mampu
                menjadi teladan dalam kehidupan bermasyarakat berdasarkan
                nilai-nilai keislaman.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg shadow-lg  transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
                Misi
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>
                  1. Menanamkan nilai-nilai keislaman dalam setiap aspek
                  pembelajaran dan kegiatan sekolah.
                </li>
                <li>
                  2. Mengembangkan potensi siswa melalui pendidikan yang
                  seimbang antara ilmu agama dan ilmu pengetahuan umum.
                </li>
                <li>
                  3. Mendorong siswa untuk aktif dalam kegiatan ekstrakurikuler
                  yang membangun keterampilan, kreativitas, dan kepemimpinan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Visi Misi Section */}

      {/* Berita Terbaru */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Berita Terbaru
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {newsData.slice(0, 3).map((news) => (
              <Link
                to={`/news/${news.id}`}
                key={news.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-green-600 text-sm mb-2">{news.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600">{news.summary}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/news"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
