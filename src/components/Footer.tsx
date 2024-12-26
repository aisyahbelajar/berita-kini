import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SMP TPI Gedangan</h3>
            <p className="text-green-100">
              Mendidik generasi masa depan dengan nilai-nilai luhur dan
              kompetensi global.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={18} /> (031) 99602183
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} /> smptpigedangan@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} /> Jln. R Kanjeng Jimat, Kecamatan Gedangan,
                Kabupaten Sidoarjo, Jawa Timur.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
            <p>Senin - Jumat: 07:00 - 15:00</p>
            <p>Sabtu - Minggu: Libur</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>
            &copy; 2024 <a href="https://aisyahlailia.netlify.app/">ALS</a> with{" "}
            <a href="https://www.instagram.com/km8_smptpigedangan/">
              KM 8 SMP TPI Gedangan
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
