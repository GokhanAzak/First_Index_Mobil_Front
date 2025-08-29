import { motion } from 'framer-motion';
import { FaBuilding, FaChartLine } from 'react-icons/fa';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden py-28 px-6 flex items-center justify-center min-h-[80vh] text-center bg-gray-50">
      {/* Sadece dekoratif bir öğe olarak basit bir SVG dalga kullanıyoruz */}
      <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1440 320" style={{ zIndex: 0 }}>
        <path fill="#ffffff" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      
      <motion.div
        className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Ana Başlık */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 drop-shadow-md"
          variants={itemVariants}
        >
          Yapay Zeka ile <span className="text-blue-600">Şirketini</span> Yönet!
        </motion.h1>

        {/* Alt Başlık / Açıklama */}
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-700 font-medium drop-shadow-sm"
          variants={itemVariants}
        >
          Şirket kurmaktan, muhasebeye kadar tüm finansal süreçlerini kolaylaştır!
        </motion.p>
        
        {/* Butonlar */}
        <div className="flex flex-col md:flex-row gap-6 mt-8 w-full justify-center">
          {/* Şirket Kurma Butonu */}
          <motion.a
            href="#sirket-kur"
            className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-2xl text-center hover:scale-105 transition-transform duration-200 cursor-pointer w-full max-w-sm"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3">
              <FaBuilding size={40} className="text-blue-600 transition-colors duration-200 group-hover:text-purple-600" />
              <span className="text-2xl font-bold text-gray-800">Şirket Kur!</span>
            </div>
            <p className="mt-2 text-gray-600">
              5.000 TL'den başlayan fiyatlarla hemen yapay zeka ile şirketini kurmaya başla.
            </p>
          </motion.a>

          {/* Muhasebe Yönetimi Butonu */}
          <motion.a
            href="#muhasebe-yonetim"
            className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-2xl text-center hover:scale-105 transition-transform duration-200 cursor-pointer w-full max-w-sm"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-3">
              <FaChartLine size={40} className="text-blue-600 transition-colors duration-200 group-hover:text-purple-600" />
              <span className="text-2xl font-bold text-gray-800">Muhasebeni Yönet!</span>
            </div>
            <p className="mt-2 text-gray-600">
              2.500 TL'den başlayan fiyatlarla hemen yapay zeka ile muhasebeni yönetmeye başla.
            </p>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;