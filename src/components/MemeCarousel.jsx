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
    url: 'https://cdn.jsdelivr.net/gh/revansakuswana/zoomies@main/src/assets/images/WhatsApp Image 2025-03-02 at 15.40.27.jpeg',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/revansakuswana/zoomies@main/src/assets/images/WhatsApp Image 2025-03-02 at 15.40.28 (1).jpeg',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/revansakuswana/zoomies@main/src/assets/images/WhatsApp Image 2025-03-02 at 15.40.28 (2).jpeg',
    maxWidth: 400,
    maxHeight: 380,
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/revansakuswana/zoomies@main/src/assets/images/WhatsApp Image 2025-03-02 at 15.40.28 (3).jpeg',
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/revansakuswana/zoomies@main/src/assets/images/WhatsApp Image 2025-03-02 at 15.40.28.jpeg',
    maxWidth: 380,
    maxHeight: 380,
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/revansakuswana/zoomies@main/src/assets/images/WhatsApp Image 2025-03-02 at 15.40.29 (1).jpeg',
    maxWidth: 380,
    maxHeight: 380,
  },
  {
    url: 'https://cdn.jsdelivr.net/gh/revansakuswana/zoomies@main/src/assets/images/WhatsApp Image 2025-03-02 at 15.40.29.jpeg',
  },
];

const MemeCarousel = () => {
  return (
    <div id="memes" className="relative w-full py-10 sm:py-20 overflow-hidden">
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
              <div className="bg-white rounded-3xl border-2 border-black py-8">
                <img
                  src={meme.url}
                  alt={`Meme ${index + 1}`}
                  style={{
                    width: meme.maxWidth,
                    height: meme.maxHeight,
                    objectFit: 'contain',
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
