import React from 'react';
import GifBackground from '../assets/1.gif'; // Adjust path to gif

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen flex flex-col justify-start items-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${GifBackground})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      <div className="text-center px-6 md:px-12 relative z-50 mt-14">
        <h1 className="text-5xl font-semibold mt-16 mb-4" style={{ color: 'rgb(19, 78, 74)' }}>
          Help your customers<br /> make a purchase, in seconds
        </h1>
        <p className="text-xl mb-6" style={{ color: 'rgb(19, 78, 74)' }}>
          Connect shoppers with product experts for live 1:1 consultation
        </p>
        <a
          href="https://www.youtube.com/watch?v=qZ_KcJg2PG8"
          className="px-6 py-2 bg-green-500 text-white rounded-full inline-block shadow-md"
        >
          View Demo
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
