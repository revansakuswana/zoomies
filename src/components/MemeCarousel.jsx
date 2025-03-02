import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/solid';

const memes = [
  {
    url: 'https://cdn.prod.website-files.com/677b6e588dbcb5516a62ce62/6784baec2034298542dfd291_snec%20djt.webp',
    maxWidth: 300,
    maxHeight: 300,
  },
  {
    url: 'https://cdn.prod.website-files.com/677b6e588dbcb5516a62ce62/6784baecc71e1da0072531a7_drake.webp',
    maxWidth: 300,
    maxHeight: 300,
  },
  {
    url: 'https://cdn.prod.website-files.com/677b6e588dbcb5516a62ce62/6784baec3453d674ed7440d3_snec%20pigeon.webp',
    maxWidth: 300,
    maxHeight: 300,
  },
  {
    url: 'https://cdn.prod.website-files.com/677b6e588dbcb5516a62ce62/6784baeb0b1fd1a669ee4405_snec%20history%20channel.webp',
    maxWidth: 300,
    maxHeight: 300,
  },
  {
    url: 'https://cdn.prod.website-files.com/677b6e588dbcb5516a62ce62/6784baec083c94590fd8cb31_snec%20nuke.webp',
    width: 430,
    height: 400,
  },
];

const MemeCarousel = () => {
  return (
    <div className="relative w-full py-10 sm:py-20 overflow-hidden">
      <h2 className="text-black text-center text-4xl sm:text-5xl mb-10 sm:mb-20">
        Memes
      </h2>

      {/* Swiper Container */}
      <div className="relative w-full overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true, el: '.custom-pagination' }} // Menghubungkan pagination ke elemen kustom
          navigation={{
            prevEl: '.prev-button',
            nextEl: '.next-button',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
              centeredSlides: false,
              spaceBetween: 10,
            }, // Jarak tetap 10px pada breakpoint 640px
            1024: {
              slidesPerView: 3.5,
              centeredSlides: false,
              spaceBetween: 20,
            }, // Jarak tetap 10px pada breakpoint 1024px
          }}
          className="w-full"
        >
          {memes.map((meme, index) => (
            <SwiperSlide key={index}>
              <div className="py-8 bg-white rounded-3xl border-2 border-black mx-auto">
                <img
                  src={meme.url}
                  alt={`Meme ${index + 1}`}
                  style={{
                    width: meme.width,
                    height: meme.height,
                    objectFit: 'cover',
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Container untuk Pagination dan Tombol Navigasi */}
        <div className="flex items-center justify-between mt-8 px-5 sm:px-20">
          {/* Pagination (Bullets) */}
          <div className="custom-pagination swiper-pagination swiper-pagination-bullets !relative !w-auto !left-0 !bottom-0" />

          {/* Tombol Navigasi */}
          <div className="flex gap-4 py-1">
            <button className="prev-button">
              <ArrowLongLeftIcon className="w-12 h-12 bg-red-500 text-white rounded-full p-2 border-2 border-black hover:bg-green-500 -translate-x-0.5 shadow-[0px_2px_0_0_black] transition" />
            </button>
            <button className="next-button">
              <ArrowLongRightIcon className="w-12 h-12 bg-red-500 text-white rounded-full p-2 border-2 border-black hover:bg-green-500 -translate-x-0.5 shadow-[0px_2px_0_0_black] transition" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeCarousel;
