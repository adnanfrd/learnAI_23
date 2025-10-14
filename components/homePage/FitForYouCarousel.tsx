"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const images = [
  "/fit1.avif",
  "/fit2.avif",
  "/fit3.avif",
  "/fit4.avif",
  "/fit5.avif",
];

const FitForYouCarousel = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        It’s a fit for you
      </h2>
      <p className="text-gray-600 mt-2">if you are a…</p>

      <div className="mt-10 px-4">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView={"auto"}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          loop={true}
        >
          {images.concat(images).map((src, index) => (
            <SwiperSlide key={index} style={{ width: "250px" }}>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt={`fit-${index}`}
                  width={250}
                  height={250}
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FitForYouCarousel;
