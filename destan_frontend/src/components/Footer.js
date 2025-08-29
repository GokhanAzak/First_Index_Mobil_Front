import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const navLinks = [
    { name: 'Anasayfa', href: '#anasayfa' },
    { name: 'Hizmetler', href: '#hizmetler' },
    { name: 'Sıkça Sorulan Sorular', href: '#sss' },
    { name: 'Referanslar', href: '#referanslar' },
    { name: 'Blog', href: '#blog' },
  ];
  
  const companyLinks = [
    { name: 'Hakkımızda', href: '#hakkimizda' },
    { name: 'Hukuk', href: '#hukuk' },
    { name: 'Sözleşme', href: '#sozlesme' },
    { name: 'Kişisel Verilerin Korunması ve Aydınlatma Metni', href: '#kvkk' },
    { name: 'Çerez Politikası', href: '#cerez-politikasi' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-gray-700 pb-8">
          {/* Sol Bölüm: Logo ve Açıklama */}
          <div className="text-center md:text-left md:w-1/3 lg:w-1/4 mb-8 lg:mb-0">
            <a href="/" className="text-2xl font-bold text-white">
              Gökhan Finansal Yönetim
            </a>
            <p className="mt-4 text-sm max-w-sm mx-auto md:mx-0">
              Yapay zeka ile finansal yönetim süreçlerinizi kolaylaştırıyor, şirketinizin geleceğine yön veriyoruz.
            </p>
          </div>
          
          {/* Sağ Bölüm: Link grupları */}
          <div className="flex flex-col md:flex-row justify-between w-full lg:w-3/4 gap-12">
            {/* Hızlı Erişim Linkleri */}
            <div className="text-center md:text-left w-full md:w-1/3">
              <h4 className="text-xl font-bold text-white mb-4">Hızlı Erişim</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Kurumsal Linkler */}
            <div className="text-center md:text-left w-full md:w-1/3">
              <h4 className="text-xl font-bold text-white mb-4">Kurumsal</h4>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* İletişim ve Sosyal Medya */}
            <div className="text-center md:text-left w-full md:w-1/3">
              <h4 className="text-xl font-bold text-white mb-4">Bize Ulaşın</h4>
              <ul className="space-y-2">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <FaPhone className="text-blue-500" />
                  <span>+90 505 471 6181</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <FaEnvelope className="text-blue-500" />
                  <span>info@.com</span>
                </li>
              </ul>
              <div className="flex justify-center md:justify-start gap-4 mt-6">
                <a href="" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaTwitter size={24} />
                </a>
                <a href="httkedin-/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaLinkedin size={24} />
                </a>
                <a href="" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Alt Kısım: Telif Hakkı */}
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {year} Gökhan Finansal Yönetim. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;