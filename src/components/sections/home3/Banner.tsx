"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Slide data type
interface Slide {
  title: string;
  heading: string;
  description: string;
  buttonText: string;
  link: string;
}

// Component props
interface BannerProps {
  slides: Slide[];
}

// Swiper options
const swiperOptions = {
  modules: [Autoplay, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
};

export default function Banner({ slides }: BannerProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden">
      <Swiper
        {...swiperOptions}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-fixnix-purple text-white bg-fixnix-lightpurple min-h-[400px] md:min-h-[600px] lg:min-h-[700px] flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <p className="text-xs md:text-xl font-medium mb-2">
                  {slide.title}
                  </p>
                  <h2 style={{ whiteSpace: 'pre-line' }} className="text-2xl text-white md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  {slide.heading.replace(/\\n/g, '\n')}
                    
                  </h2>
                  <p className="text-xs md:text-base text-white/90 mb-6">
                    {slide.description.split("<br/>").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <Link
                    href={slide.link}
                    className="inline-block relative px-3 py-2 lg:px-6 lg:py-3 text-sm md:text-base font-semibold text-fixnix-lightpurple rounded-full group overflow-hidden z-10"
                  >
                    <span className="absolute inset-0 bg-white transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full z-0"></span>
                    <span className="absolute inset-0 bg-fixnix-darkpurple translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
                    <span className="relative z-10 group-hover:text-white">
                      {slide.buttonText}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10 h1p cursor-pointer">
          <i className="fas fa-chevron-left text-white text-xl"></i>
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10 h1n cursor-pointer">
          <i className="fas fa-chevron-right text-white text-xl"></i>
        </div>
      </Swiper>

      {/* Custom Bullets */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-white"
                : "border border-white bg-transparent hover:bg-white/30"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
