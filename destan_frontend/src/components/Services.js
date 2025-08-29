import React from 'react';
import { FaUserTie, FaPencilRuler, FaDollarSign, FaChartLine, FaShieldAlt, FaBuilding, FaMobileAlt, FaHandshake, FaFileInvoice, FaGlobe, FaCogs, FaComments, FaPiggyBank } from 'react-icons/fa';

const servicesData = [
  {
    title: "Yapay Zeka İle Şirket Kuruluşu",
    description: "Yapay zeka ile şirket kurmak çok kolay. Gerekli bilgi ve belgeleri API yapay zekaya verin sizin yerinize şirketiniz kolay ve hızlı bir şekilde kursun.",
    icon: FaPencilRuler,
    color: "border-blue-500",
  },
  {
    title: "Gökhan Finansal Yönetim Nedir?",
    description: "Şirketiniz kolay bir şekilde kurulup muhasebenizi yönetmenizi sağlayan bir yapay zekadır.",
    details: ["Mükellef Yönetim Paketi", "Finansal Yönetim (CFO) Paketi", "Ön Muhasebe Programı", "Şirket Kurulum Paketi", "Elektronik Fatura", "Şirket Değerlendirme Paketi ve", "Mali Tablo Analiz Paketi gibi avantajlardan ekstra bir ücret ödemeden faydalanırlar."],
    icon: FaDollarSign,
    color: "border-yellow-500",
  },
  {
    title: "Mükellef Yönetim Paketi",
    description: "Mükelleflerin vergi yükümlülüklerini daha kolay ve daha etkili bir şekilde yönetmelerini sağlayan bir yapay zekadır. Bu paket ile Mali Müşaviriniz;",
    details: ["Vergilendirme beyan eder", "SGK işlemlerini yapar", "Defterlerini tutar ve tüm muhasebe sürecini etkin ve kolay bir şekilde yönetir."],
    icon: FaUserTie,
    color: "border-red-500",
  },
  {
    title: "Finansal Yönetim (CFO) Paketi",
    description: "Şirketlerin finans operasyonlarını daha etkili ve daha kolay bir şekilde yönetmelerini sağlayan bir yapay zekadır. Bu yapay zeka ile şirketler, minimum finansal bilgiye daha etkili;",
    details: ["Borçlanma Yönetimi", "Verimlilik Maksimizasyonu", "Mali Takip Kontrolü ve", "Kârlılık Analizi yapabilir."],
    icon: FaChartLine,
    color: "border-blue-500",
  },
  {
    title: "Şirket Değerlendirme Paketi",
    description: "Şirketler GÖkhan ile finansal, pazar ve piyasa durumlarını istedikleri zaman kişi ve kuruluşlara sorabilir. Bu sistemle şirketler kişi ve kuruluşlara;",
    details: ["Risk", "Borçlanma", "Finansal Yapı", "Satış", "Piyasa Memuriyeti Durumu ve daha fazlasını kolaylıkla biliyor."],
    icon: FaBuilding,
    color: "border-yellow-500",
  },
  {
    title: "Mükellefler İçin Avantajlar",
    description: "Gökhan   Finansal Yönetim kullanıcıları için mükelleflere özel.",
    details: ["Ön Muhasebe Programı", "Finansal Yönetim (CFO) Yazılımı", "Elektronik Fatura", "Şirket Değerlendirme", "Hali Tablo Analiz Yazılımı."],
    icon: FaGlobe,
    color: "border-red-500",
  },
  {
    title: "Hızlı Belge Transferi",
    description: "Gökhan   Finansal Yönetim, muhasebe ile mükellefler arasında hızlı belge transferleri yapılmasını sağlar.",
    icon: FaCogs,
    color: "border-blue-500",
  },
  {
    title: "Güvenli ve Kolay",
    description: "Muhasebe ve finans operasyonları, yapay zeka ile elektronik ortamda güvenli ve kolay bir şekilde gerçekleştirilir.",
    icon: FaShieldAlt,
    color: "border-yellow-500",
  },
  {
    title: "Kolay İletişim",
    description: "Yapay zeka ile hızlı ve kolay iletişim.",
    icon: FaComments,
    color: "border-red-500",
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
          Hizmetlerimiz ve Paketlerimiz
        </h2>
        
        {/* Hizmet Kartları Izgarası */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${service.color}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <service.icon className={`text-3xl text-${service.color.split('-')[1]}`} />
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.details && (
                <ul className="list-disc list-inside text-gray-600 space-y-1 mt-4">
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Ek Bilgilendirme ve Buton - "Uzmanına Danış" kısmı */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <div className="bg-blue-600 text-white rounded-xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/4 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Uzmanına Ücretsiz Soru Sor</h3>
            <p className="text-lg">Vergi, SGK, Muhasebe gibi konularda   ücretsiz sorularınızı sorabilirsiniz.</p>
          </div>
          <a href="#contact" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Hemen Soru Sor
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;