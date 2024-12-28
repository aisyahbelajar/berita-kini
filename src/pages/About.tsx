import React from "react";
import { CheckCircle, Award, Users, Briefcase } from "lucide-react";

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
          <div>
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
            Keunggulan Kami
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fasilitas Modern
                </h3>
                <p className="text-gray-600">
                  Dilengkapi dengan laboratorium komputer, bengkel praktek, dan
                  perpustakaan digital untuk mendukung pembelajaran optimal.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Program Unggulan
                </h3>
                <p className="text-gray-600">
                  Menawarkan program kejuruan yang relevan dengan kebutuhan
                  industri dan dilengkapi sertifikasi kompetensi.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Pengajar Profesional
                </h3>
                <p className="text-gray-600">
                  Tim pengajar berpengalaman dan tersertifikasi yang terus
                  mengembangkan kompetensi.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Briefcase className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kerjasama Industri
                </h3>
                <p className="text-gray-600">
                  Menjalin kerjasama dengan berbagai perusahaan untuk program
                  magang dan rekrutmen.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Program Keahlian
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Teknik Komputer & Jaringan
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Administrasi Jaringan</li>
                <li>• Keamanan Sistem</li>
                <li>• Cloud Computing</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Multimedia
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Desain Grafis</li>
                <li>• Animasi 3D</li>
                <li>• Video Editing</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Akuntansi
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Akuntansi Digital</li>
                <li>• Perpajakan</li>
                <li>• Administrasi Keuangan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
