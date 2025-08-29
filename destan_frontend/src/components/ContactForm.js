import { useState } from 'react';
import { FiPhone, FiMail, FiMessageCircle } from 'react-icons/fi';
import Reveal from './Reveal';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', interest: 'Hizmetler', message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: `Konu: ${formData.interest} | Mesaj: ${formData.message}`,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', interest: 'Hizmetler', message: '' });
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      console.error('Gönderim hatası:', err);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-blue-50 to-indigo-50 py-24 px-4">
      <Reveal>
        <div className="max-w-5xl mx-auto rounded-3xl shadow-xl p-0 flex flex-col md:flex-row gap-8 overflow-hidden border border-gray-200 bg-white">
          {/* Sol Taraf: İletişim Bilgileri */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-center p-8 lg:p-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-md">İletişime Geçin</h3>
            <p className="text-sm text-white/90 mb-6 font-light">
              Formu doldurarak bize ulaşabilir veya aşağıdaki iletişim kanallarını kullanabilirsiniz.
            </p>
            <ul className="space-y-4 text-base">
              <li className="flex items-center gap-3">
                <FiPhone size={20} className="text-white" /> <span className="font-semibold">+90 505 471 6181</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail size={20} className="text-white" /> <span className="font-semibold">azakgokhan@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMessageCircle size={20} className="text-white" /> <span className="font-semibold">Bize Mesaj Gönderin</span>
              </li>
            </ul>
          </div>

          {/* Sağ Taraf: Form */}
          <div className="md:w-1/2 p-8 lg:p-12 bg-white flex flex-col justify-center">
            {success && (
              <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg mb-4 text-center font-semibold border border-green-300 animate-fade-in">
                Mesajınız başarıyla gönderildi.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <label className="text-sm text-gray-700 font-semibold mb-1 block">Ad</label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Örn. Gökhan"
                    className="w-full border-2 border-gray-200 bg-white rounded-xl p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-sm text-gray-700 font-semibold mb-1 block">Soyad</label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Örn. Azak"
                    className="w-full border-2 border-gray-200 bg-white rounded-xl p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-700 font-semibold mb-1 block">E-posta</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ornek@eposta.com"
                  className="w-full border-2 border-gray-200 bg-white rounded-xl p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-700 font-semibold mb-1 block">Hangi konuda iletişime geçmek istersiniz?</label>
                <div className="flex flex-wrap gap-4 mt-2">
                  {['Hizmetler', 'Destek', 'Ortaklık', 'Diğer'].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 font-medium cursor-pointer">
                      <input
                        type="radio"
                        name="interest"
                        value={opt}
                        checked={formData.interest === opt}
                        onChange={handleChange}
                        className="accent-blue-600 h-4 w-4"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-700 font-semibold mb-1 block">Mesajınız</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border-2 border-gray-200 bg-white rounded-xl p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="Merhaba, sizinle şu konuda iletişime geçmek istiyorum..."
                  required
                />
              </div>
              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-12 rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg"
                >
                  MESAJI GÖNDER
                </button>
              </div>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default ContactForm;