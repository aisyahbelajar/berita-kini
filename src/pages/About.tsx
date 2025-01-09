import React from "react";
import {
  CheckCircle,
  BookOpenText,
  PersonStanding,
  Bike,
  Languages,
  Calculator,
  TestTube,
} from "lucide-react";

export default function About() {
  return (
    <div>
      <div className="bg-gradient-to-r from-green-600 to-green-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">
            Tentang Kami
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sejarah SMP TPI Gedangan
            </h2>
            <p className="text-gray-600 mb-4">
              Didirikan pada tahun 3 Januari 1972, SMP TPI Gedangan sejak awal
              berkomitmen untuk menyediakan pendidikan yang mengintegrasikan
              nilai-nilai keislaman dengan kurikulum pendidikan nasional. Dengan
              komitmen untuk menghasilkan lulusan yang berkualitas dan siap
              kerja, kami terus berinovasi dalam metode pembelajaran dan
              fasilitas pendidikan.
            </p>
            <p className="text-gray-600">
              Dengan pengalaman lebih dari lima dekade, kami terus berupaya
              meningkatkan kualitas pendidikan dan beradaptasi dengan
              perkembangan zaman, sambil tetap mempertahankan nilai-nilai
              keislaman sebagai landasan utama dalam mendidik generasi muda.
            </p>
          </div>
          <div className="">
            <img
              src="https://i.imgur.com/BsbPf13.jpeg"
              alt="Sekolah"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">300+</div>
            <p className="text-gray-600">Siswa Aktif</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
            <p className="text-gray-600">Guru & Staff</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">B</div>
            <p className="text-gray-600">Akreditasi</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">6</div>
            <p className="text-gray-600">Jumlah Kelas</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Program Unggulan
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Program Tahfidz
                </h3>
                <p className="text-gray-600">
                  Membantu siswa mendalami Al-Qur'an dengan metode hafalan yang
                  terstruktur dan bimbingan intensif.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <BookOpenText className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Mengaji Kitab Kuning
                </h3>
                <p className="text-gray-600">
                  Mengajarkan pemahaman mendalam tentang ilmu keislaman melalui
                  kitab klasik para ulama.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <PersonStanding className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Program Kewirausahaan
                </h3>
                <p className="text-gray-600">
                  Membekali siswa dengan keterampilan bisnis dan wirausaha
                  melalui pelatihan praktis.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Bike className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kelas Olahraga
                </h3>
                <p className="text-gray-600">
                  Mengembangkan potensi fisik siswa melalui pelatihan olahraga
                  profesional.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Languages className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kelas Bahasa
                </h3>
                <p className="text-gray-600">
                  Menyediakan pembelajaran bahasa asing seperti Bahasa Inggris
                  dan Arab dengan pengajar berpengalaman.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Calculator className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kelas Matematika
                </h3>
                <p className="text-gray-600">
                  Menyediakan pendekatan belajar matematika yang inovatif untuk
                  meningkatkan kemampuan analitis siswa.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <TestTube className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kelas IPA
                </h3>
                <p className="text-gray-600">
                  Fasilitas laboratorium modern untuk pembelajaran sains yang
                  interaktif dan menyenangkan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Ekstrakulikuler
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Pramuka
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Futsal
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Pagar Nusa
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Multimedia
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Kewirausahaan
              </h3>
            </div>
          </div>
        </div>

        <div className="my-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pembiasaan
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sholat Dhuha dan Sholat Dhuhur Berjamaah
                </h3>
                <p className="text-gray-600">
                  Membantu siswa mendalami Al-Qur'an dengan metode hafalan yang
                  terstruktur dan bimbingan intensif.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <BookOpenText className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kajian Fiqih & Akhlak
                </h3>
                <p className="text-gray-600">
                  Mengajarkan pemahaman mendalam tentang ilmu keislaman melalui
                  kitab klasik para ulama.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <PersonStanding className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sinarta
                </h3>
                <p className="text-gray-600">
                  Membekali siswa dengan keterampilan bisnis dan wirausaha
                  melalui pelatihan praktis.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Bike className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Green & Clean
                </h3>
                <p className="text-gray-600">
                  Mengembangkan potensi fisik siswa melalui pelatihan olahraga
                  profesional.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Languages className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Murojaah
                </h3>
                <p className="text-gray-600">
                  Menyediakan pembelajaran bahasa asing seperti Bahasa Inggris
                  dan Arab dengan pengajar berpengalaman.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
