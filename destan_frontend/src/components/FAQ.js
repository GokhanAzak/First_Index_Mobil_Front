import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Reveal from './Reveal';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Mali Müşavirim Ne Zaman Fatura ve Gider Belgelerimi Kontrol Edecek?",
      answer: (
        <ul className="list-disc list-inside space-y-1">
          <li>Her ayın 15'ine kadar gelen belgeleri kontrol eder.</li>
          <li>Her ayın 20'sine kadar aylık özetini onaylar.</li>
        </ul>
      ),
    },
    {
      question: "Alış ve Satış Faturalarımı Nasıl Göndereceğim?",
      answer: (
        <>
          <p className="mb-2">Satış ve alış faturalarınızı iki şekilde gönderebilirsiniz.</p>
          <ul className="list-decimal list-inside space-y-1">
            <li>Gökhan Finansal Yönetim'de yer alan "Alış Faturaları" ve "Satış Faturaları" bölümlerine yükleyerek faturalarınızı mali müşavirinize ulaştırabilirsiniz.</li>
            <li>Adınıza tanımlanan ön muhasebe programına ekleyerek mali müşavirinize ulaştırabilirsiniz.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Giderlerimi Nasıl Göndereceğim?",
      answer: (
        <>
          <p className="mb-2">Giderlerinizi iki şekilde gönderebilirsiniz.</p>
          <ul className="list-decimal list-inside space-y-1">
            <li>Gökhan Finansal Yönetim'de yer alan "Belgeler" bölümüne yükleyerek giderlerinizi mali müşavirinize ulaştırabilirsiniz.</li>
            <li>Adınıza tanımlanan ön muhasebe programına ekleyerek mali müşavirinize ulaştırabilirsiniz.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Aylık Ödemem Gereken Vergileri Nasıl Öğrenebilirim?",
      answer: "Gökhan Finansal Yönetim'de yer alan 'Tahakkuk Fişleri' bölümünden kolaylıkla ulaşabilirsiniz.",
    },
    {
      question: "Ödeme Dekontlarımı Nasıl Gönderebilirim?",
      answer: (
        <>
          <p className="mb-2">Dekontlarınızı iki şekilde gönderebilirsiniz.</p>
          <ul className="list-decimal list-inside space-y-1">
            <li>Gökhan Finansal Yönetim'de yer alan "Belgeler" bölümüne yükleyerek dekontlarınızı mali müşavirinize ulaştırabilirsiniz.</li>
            <li>Adınıza tanımlanan ön muhasebe programına ekleyerek dekontlarınızı mali müşavirinize ulaştırabilirsiniz.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Vergi Levhasına Nasıl Ulaşabilirim?",
      answer: "Gökhan Finansal Yönetim'de yer alan 'Vergi Levhası' bölümünden kolaylıkla ulaşabilirsiniz.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Finansal yönetim süreçlerinizle ilgili en çok merak edilen sorular ve detaylı cevapları
          </p>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="border border-gray-200 rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition-all duration-300">
                <div
                  className="flex justify-between items-center p-6 cursor-pointer bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-200"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <span className="text-xl text-blue-600 flex-shrink-0">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100 p-6' : 'grid-rows-[0fr] opacity-0 p-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <Reveal>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Hala Sorunuz mu Var?
              </h3>
              <p className="text-gray-600 mb-6">
                Yukarıda bulamadığınız sorularınız için bizimle iletişime geçebilirsiniz.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                İletişime Geç
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
