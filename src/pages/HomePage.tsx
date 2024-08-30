import React from 'react';
import Navbar from '../components/Navbar';
import photoBandung from '../assest/Foto_Bandung.jpg';
import photoLembang from '../assest/Lembang_foto.jpeg';
import photoKotak1 from '../assest/Lembang_foto.jpeg';
import photoKotak2 from '../assest/Lembang_foto.jpeg';
import photoKotak3 from '../assest/Lembang_foto.jpeg';
import photoKotak4 from '../assest/Lembang_foto.jpeg';
import photoKotak5 from '../assest/Lembang_foto.jpeg';
import photoKotak6 from '../assest/Lembang_foto.jpeg';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const { ref: bandungRef, inView: bandungInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: lembangRef, inView: lembangInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: whyBandungRef, inView: whyBandungInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: testimoniRef } = useInView({ triggerOnce: false, threshold: 0.1 });

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
      <main className="relative">
        <div id="home" className="relative">
          <img
            src={photoBandung}
            alt="Bandung"
            className="object-cover w-full h-screen"
          />
          <motion.div
            ref={bandungRef}
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: bandungInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-center">Selamat Datang di Bandung</h1>
            <p className="text-lg text-center">
              Bandung adalah ibu kota provinsi Jawa Barat di Indonesia. Kota ini dikenal dengan pemandangan alamnya yang indah, udara yang sejuk, dan kulinernya yang lezat. Bandung juga merupakan pusat pendidikan dan teknologi di Indonesia.
            </p>
          </motion.div>
        </div>

        <div id="about" ref={lembangRef} className="mb-16 pt-32 flex flex-row p-4">
          <div className="flex-1 pr-6">
            <div className="relative h-full">
              <img
                src={photoLembang}
                alt="Lembang"
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
          </div>
          <div className="flex-1 pl-4 flex flex-col justify-center">
            <motion.h2
              className="text-2xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: lembangInView ? 1 : 0, y: lembangInView ? 0 : 20 }}
              transition={{ duration: 1 }}
            >
              Eksplorasi Lembang
            </motion.h2>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: lembangInView ? 1 : 0, x: lembangInView ? 0 : -20 }}
              transition={{ duration: 1 }}
            >
              Lembang adalah sebuah kawasan wisata di utara Bandung yang terkenal dengan suasana pegunungan dan udara segar. Di sini, Anda dapat menikmati berbagai tempat wisata seperti Tangkuban Perahu, Farm House, dan banyak lagi.
            </motion.p>
          </div>
        </div>

        <section id="whyBandung" ref={whyBandungRef} className="mt-16 pt-32 bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: whyBandungInView ? 1 : 0, y: whyBandungInView ? 0 : 20 }}
              transition={{ duration: 1 }}
            >
              Kenapa Bandung?
            </motion.h2>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: whyBandungInView ? 1 : 0, x: whyBandungInView ? 0 : -20 }}
              transition={{ duration: 1 }}
            >
              Bandung adalah tempat yang sempurna untuk pelarian dari kesibukan kota. Dengan banyaknya destinasi wisata alam, kuliner yang menggugah selera, dan suasana yang menyegarkan, Bandung menawarkan pengalaman yang tak terlupakan.
            </motion.p>
          </div>
        </section>

        <section id="testimoni" ref={testimoniRef} className="py-8 px-4 pt-24">
          <h2 className="text-3xl font-bold mb-4 text-center">Testimoni</h2>
          <Slider {...carouselSettings} className="slick-slider">
            {[photoKotak1, photoKotak2, photoKotak3, photoKotak4, photoKotak5, photoKotak6].map((photo, index) => (
              <div
                key={index}
                className="card bg-base-100 w-80 flex-shrink-0 mx-4 space-x-1 p-8"
              >
                <figure>
                  <img
                    src={photo}
                    alt={`Kotak ${index + 1}`}
                    className="object-cover w-full h-40 rounded-t-md"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold mt-2">Kenapa Bandung?</h2>
                  <p className='mt-2'>
                    Bandung adalah tempat yang sempurna untuk pelarian dari kesibukan kota. Dengan banyaknya destinasi wisata alam, kuliner yang menggugah selera, dan suasana yang menyegarkan, Bandung menawarkan pengalaman yang tak terlupakan.
                  </p>
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
