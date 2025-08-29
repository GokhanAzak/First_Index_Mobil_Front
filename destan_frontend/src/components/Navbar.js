import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiHome, FiTool, FiHelpCircle, FiUsers, FiCode, FiUser, FiLogIn } from 'react-icons/fi';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Anasayfa', href: '#anasayfa', icon: FiHome },
    { name: 'Hizmetler', href: '#hizmetler', icon: FiTool },
    { name: 'Sıkça Sorulan Sorular', href: '#sss', icon: FiHelpCircle },
    { name: 'Referanslar', href: '#referanslar', icon: FiUsers },
    { name: 'Blog', href: '#blog', icon: FiCode },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  const textColorClass = isScrolled ? 'text-gray-800' : 'text-white';
  const logoColorClass = isScrolled ? 'text-gray-800' : 'text-white';
  const hoverColorClass = isScrolled ? 'hover:text-blue-600' : 'hover:text-blue-400';
  const menuIconColorClass = isScrolled ? 'text-gray-800' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:py-6">
        
        {/* Sol Bölüm: Logo */}
        <div className="flex-shrink-0">
          <a href="/" className={`text-xl md:text-2xl font-bold transition-colors duration-500 ${logoColorClass}`}>
            Gökhan Finansal Yönetim
          </a>
        </div>

        {/* Orta Bölüm: Navigasyon Linkleri (Sadece masaüstü) */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className={`flex items-center space-x-2 relative font-medium transition-colors duration-500 group ${textColorClass} ${hoverColorClass}`}>
                  <item.icon className="text-xl" />
                  <span>{item.name}</span>
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Sağ Bölüm: İkonlar ve Hamburger Menü Butonu */}
        <div className="flex items-center space-x-4">
          {/* Giriş Yap / Kayıt Ol Butonları (Sadece masaüstü) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => openAuthModal('login')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 border-transparent hover:border-blue-400 transition-all duration-300 ${textColorClass} ${hoverColorClass}`}
            >
              <FiLogIn className="text-xl" />
              <span className="font-medium">Giriş Yap</span>
            </button>
            <button
              onClick={() => openAuthModal('register')}
              className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg`}
            >
              <FiUser className="text-xl" />
              <span className="font-medium">Kayıt Ol</span>
            </button>
          </div>

          {/* Mobil Hamburger Butonu */}
          <button 
            onClick={toggleMenu}
            className={`md:hidden text-2xl focus:outline-none transition-colors duration-500 ${menuIconColorClass}`}
            aria-label="Menüyü Aç"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobil Yandan Açılan Menü */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 text-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <a href="/" className="text-xl font-bold text-white">Gökhan Finansal</a>
          <button onClick={toggleMenu} className="text-2xl text-white focus:outline-none">
            <FiX />
          </button>
        </div>
        <ul className="flex flex-col space-y-2 p-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="flex items-center space-x-4 text-lg font-medium p-3 rounded-md hover:bg-gray-800 transition-colors duration-200"
                onClick={toggleMenu}
              >
                <item.icon className="text-blue-400" size={20} />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="p-6 mt-auto flex flex-col space-y-4">
          <button
            onClick={() => {
              openAuthModal('login');
              toggleMenu();
            }}
            className="w-full text-center bg-gray-800 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300"
          >
            <div className="flex items-center justify-center space-x-2">
              <FiLogIn />
              <span>Giriş Yap</span>
            </div>
          </button>
          <button
            onClick={() => {
              openAuthModal('register');
              toggleMenu();
            }}
            className="w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            <div className="flex items-center justify-center space-x-2">
              <FiUser />
              <span>Kayıt Ol</span>
            </div>
          </button>
        </div>
      </div>

      {/* Menü Açıkken Arka Planı Karartma */}
      {menuOpen && (
        <div 
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        />
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={closeAuthModal}
        defaultMode={authMode}
      />
    </nav>
  );
};

export default Navbar;