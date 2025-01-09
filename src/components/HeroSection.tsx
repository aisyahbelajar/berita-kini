import { useState, useEffect } from "react";

const backgrounds = [
  "https://i.imgur.com/BsbPf13.jpeg",
  "https://i.imgur.com/onIhUGl.jpeg",
  "https://i.imgur.com/hQtuHGV.jpeg",
  "https://i.imgur.com/7U11XMz.jpeg",
];

export default function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-r from-green-50 via-green-200 to-green-300">
        <div className="max-w-screen-xl mx-auto container md:p-12 p-5">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Section */}
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#1d8314] via-[#1d8314] to-[#1b7a20] text-transparent bg-clip-text">
                SMP TPI Gedangan
              </h1>
              <p className="text-xl text-green-700 max-w-lg">
                Membentuk Generasi Unggul, Berkarakter, dan Siap Bersaing
              </p>

              <div className="flex justify-start space-x-6 mt-6">
                <div className="animate-bounce flex gap-4">
                  <a
                    href="https://wa.me/6285755325592"
                    className="bg-[#1d8314] text-white py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    Daftar Sekarang
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1W4vQLb1Ta2dC305LSnS5ULU4TN64Xzse/view"
                    className="bg-[#ffffff] text-[#1d8314] py-3 px-6 rounded-full border-2 border-[#1d8314] shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  >
                    Download Brosur
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="animate-float">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b7a20] via-[#1d8314] to-transparent opacity-50 rounded-lg -rotate-45"></div>
                <img
                  src={backgrounds[currentBg]}
                  alt="SMP TPI Gedangan"
                  className="rounded-lg shadow-2xl transform transition-all duration-1000 ease-in-out hover:-rotate-[400deg] -rotate-[48deg]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
