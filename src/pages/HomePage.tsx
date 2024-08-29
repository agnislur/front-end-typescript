import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import photoBandung from '../assest/Foto_Bandung.jpg'; 
import photoLembang from '../assest/Lembang_foto.jpeg'; 
import photoKotak1 from '../assest/Lembang_foto.jpeg'; 
import photoKotak2 from '../assest/Lembang_foto.jpeg'; 
import photoKotak3 from '../assest/Lembang_foto.jpeg'; 
import photoKotak4 from '../assest/Lembang_foto.jpeg'; 
import photoKotak5 from '../assest/Lembang_foto.jpeg'; 
import photoKotak6 from '../assest/Lembang_foto.jpeg'; 
import { useInView } from 'react-intersection-observer'; // Import useInView hook
import 'animate.css';
import Slider from 'react-slick'; // Import the slider component
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const HomePage: React.FC = () => {
  const { ref: bandungRef, inView: bandungInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: lembangRef, inView: lembangInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: whyBandungRef, inView: whyBandungInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: testimoniRef } = useInView({ triggerOnce: true, threshold: 0.1 });

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <header>
        <Navbar /> 
      </header>
      <main className="relative"> {/* Add padding-top to account for navbar height */}
        {/* Container for the background image */}
        <div id="home" className="relative">
          <img 
            src={photoBandung} 
            alt="Bandung" 
            className="object-cover w-full h-screen"
          />
          {/* Overlay text with animation */}
          <div 
            ref={bandungRef}
            className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-4 transition-opacity duration-1000 ${bandungInView ? 'animate__animated animate__fadeIn animate__delay-1s' : 'opacity-0'}`}
          >
            <h1 className={`text-4xl font-bold mb-4 text-center ${bandungInView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>Selamat Datang di Bandung</h1>
            <p className={`text-lg text-center ${bandungInView ? 'animate__animated animate__fadeInUp animate__delay-200' : 'opacity-0'}`}>
              Bandung adalah ibu kota provinsi Jawa Barat di Indonesia. Kota ini dikenal dengan pemandangan alamnya yang indah, udara yang sejuk, dan kulinernya yang lezat. Bandung juga merupakan pusat pendidikan dan teknologi di Indonesia.
            </p>
          </div>
        </div>

        <div id="about" ref={lembangRef} className={` mb-16 pt-32 flex flex-row p-4 transition-opacity duration-1000 ${lembangInView ? 'animate__animated animate__fadeIn animate__delay-2s' : 'opacity-0'}`}>
          {/* Container for the photo and text */}
          <div className="flex-1 pr-6">
            <div className="relative h-full">
              <img 
                src={photoLembang} 
                alt="Lembang" 
                className="object-cover w-full h-full rounded-3xl" // Border-radius applied
              />
            </div>
          </div>
          <div className="flex-1 pl-4 flex flex-col justify-center">
            <h2 className={`text-2xl font-bold mb-2 ${lembangInView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>Eksplorasi Lembang</h2>
            <p className={`text-lg ${lembangInView ? 'animate__animated animate__fadeInUp animate__delay-200' : 'opacity-0'}`}>
              Lembang adalah sebuah kawasan wisata di utara Bandung yang terkenal dengan suasana pegunungan dan udara segar. Di sini, Anda dapat menikmati berbagai tempat wisata seperti Tangkuban Perahu, Farm House, dan banyak lagi.
            </p>
          </div>
        </div>

        {/* New Section: Why Visit Bandung */}
        <section id="whyBandung" ref={whyBandungRef} className={`mt-16 pt-32 bg-gray-100 py-8 transition-opacity duration-1000 ${whyBandungInView ? 'animate__animated animate__fadeIn animate__delay-3s' : 'opacity-0'}`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-4 ${whyBandungInView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>Kenapa Bandung?</h2>
            <p className={`text-lg ${whyBandungInView ? 'animate__animated animate__fadeInUp animate__delay-200' : 'opacity-0'}`}>
              Bandung adalah tempat yang sempurna untuk pelarian dari kesibukan kota. Dengan banyaknya destinasi wisata alam, kuliner yang menggugah selera, dan suasana yang menyegarkan, Bandung menawarkan pengalaman yang tak terlupakan.
            </p>
          </div>
        </section>

        {/* New Section: Horizontal Scroll Carousel */}
        <section id="testimoni" ref={testimoniRef} className="py-8 px-4 pt-24 Vspace-x-4 p-4 ">
          <h2 className="text-3xl font-bold mb-4 text-center ">Testimoni</h2>
          <Slider {...carouselSettings} className="slick-slider">
            {[photoKotak1, photoKotak2, photoKotak3, photoKotak4, photoKotak5, photoKotak6].map((photo, index) => (
              <div
                key={index}
                className="card bg-base-100 w-80 flex-shrink-0 mx-4 space-x-1 p-8  " // Adjusted size and margin
              >
                <figure>
                  <img 
                    src={photo} 
                    alt={`Kotak ${index + 1}`} 
                    className="object-cover w-full h-40 rounded-t-md " 
                  />
                </figure>
                <div className="card-body ">
                  <h2 className="card-title font-bold mt-2">Kenapa Bandung?</h2>
                  <p className='mt-2'>Bandung adalah tempat yang sempurna untuk pelarian dari kesibukan kota. Dengan banyaknya destinasi wisata alam, kuliner yang menggugah selera, dan suasana yang menyegarkan, Bandung menawarkan pengalaman yang tak terlupakan.</p>
                  <div className="card-actions justify-end">
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </main>
    </>
  );
};

export default HomePage;
