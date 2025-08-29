import React from 'react';
import Reveal from './Reveal';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
            Hakkımızda
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Gökhan Finansal Yönetim, şirketlerin finansal süreçlerini kolaylaştırmak ve mali müşavirlik hizmetlerini dijitalleştirmek için kurulmuş bir platformdur.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;