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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            currentBg === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-end">
        <div className="container mx-auto px-4">
          <div className="absolute inset-0 bg-green-900 opacity-10"></div>
          <div className="max-w-4xl mx-auto text-start transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-down">
              <span className="text-green-500"> {""}</span>
              <span className="text-white"> Yuk Daftar di PPDB</span>
              <span className="text-green-500">
                <br />
                SMP TPI Gedangan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up">
              Membentuk Generasi Unggul, Berkarakter, dan Siap Bersaing
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transform hover:-translate-y-1 transition-all duration-300 animate-bounce">
                Daftar Sekarang !
              </button>
            </div>
          </div>
        </div>

        {/* 3D Decorative Elements */}
        <div className="absolute left-10 top-20 w-20 h-20 bg-blue-500/30 rounded-lg animate-float transform rotate-45 backdrop-blur-sm" />
        <div className="absolute right-10 bottom-1/4 w-16 h-16 bg-purple-500/30 rounded-lg animate-float-delayed transform -rotate-12 backdrop-blur-sm" />
        <div className="absolute left-1/4 bottom-20 w-24 h-24 bg-green-500/30 rounded-full animate-float-slow backdrop-blur-sm" />
      </div>

      {/* Background Dots Pattern */}
      <div
        className="absolute inset-0 bg-repeat opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />
    </div>
  );
}
