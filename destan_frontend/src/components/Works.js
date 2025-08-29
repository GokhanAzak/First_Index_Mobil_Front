import React from 'react';
import { FiCode, FiDatabase, FiTrendingUp, FiShield, FiUsers, FiAward } from 'react-icons/fi';

const Works = () => {
  const projects = [
    {
      id: 1,
      title: 'Finansal Analiz Platformu',
      description: 'Gelişmiş veri analizi ve raporlama özellikleri ile finansal karar verme süreçlerini destekleyen web uygulaması.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
      icon: FiTrendingUp,
      category: 'Web Uygulaması'
    },
    {
      id: 2,
      title: 'Müşteri Yönetim Sistemi',
      description: 'Müşteri ilişkileri, satış takibi ve raporlama özellikleri ile kapsamlı CRM çözümü.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      icon: FiUsers,
      category: 'CRM Sistemi'
    },
    {
      id: 3,
      title: 'Güvenlik ve Uyumluluk Modülü',
      description: 'Finansal kurumlar için gerekli güvenlik standartları ve düzenleyici uyumluluk kontrollerini sağlayan sistem.',
      technologies: ['Angular', 'Spring Boot', 'Oracle', 'Elasticsearch'],
      icon: FiShield,
      category: 'Güvenlik Sistemi'
    },
    {
      id: 4,
      title: 'Veri Depolama ve Yedekleme',
      description: 'Büyük ölçekli finansal verilerin güvenli depolanması ve otomatik yedekleme işlemleri.',
      technologies: ['Python', 'Django', 'MongoDB', 'AWS S3'],
      icon: FiDatabase,
      category: 'Veri Yönetimi'
    },
    {
      id: 5,
      title: 'Mobil Finans Uygulaması',
      description: 'iOS ve Android platformları için geliştirilmiş, kullanıcı dostu mobil finans yönetim uygulaması.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Native Base'],
      icon: FiCode,
      category: 'Mobil Uygulama'
    },
    {
      id: 6,
      title: 'Performans Ölçüm Sistemi',
      description: 'Finansal portföylerin performansını analiz eden ve karşılaştırmalı raporlar sunan sistem.',
      technologies: ['Next.js', 'FastAPI', 'TimescaleDB', 'D3.js'],
      icon: FiAward,
      category: 'Analitik Platform'
    }
  ];

  return (
    <section id="works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Başlık Bölümü */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Projelerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finansal teknoloji alanında geliştirdiğimiz yenilikçi çözümler ve başarılı projeler
          </p>
        </div>

        {/* Proje Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Proje Başlığı ve İkon */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <project.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Teknolojiler */}
              <div className="p-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Kullanılan Teknolojiler:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Efekti */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* İstatistikler */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Tamamlanan Proje</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">100+</div>
            <div className="text-gray-600">Mutlu Müşteri</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-gray-600">Yıllık Deneyim</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Destek</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;