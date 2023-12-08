import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
const brands = [
  ["amazon.svg", "dribble.svg", "hubspot.svg","zoom.svg","zoom.svg"],
  ["netflix.svg", "notion.svg", "zoom.svg","zoom.svg","zoom.svg"],
];
export default function Brand() {
  return (
    <div className="">
      <Swiper
      className="mb-10"
       loop
       style={{ transitionTimingFunction: 'cubic-bezier(.29, 1.01, 1, -0.68)' }}
       modules={[Autoplay]}
       speed="3000"
       autoplay={{
         delay: 1000,
         disableOnInteraction: false,
         reverseDirection: false,
       }}
       spaceBetween={50}
       slidesPerView={2}
      >
        {brands[0].map((brand, index) => (
          <SwiperSlide className="px-5 flex justify-center" key={index}>
            <img className="grayscale"  src={brand} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop
        style={{ transitionTimingFunction: 'cubic-bezier(.29, 1.01, 1, -0.68)' }}
        modules={[Autoplay]}
        speed="3000"
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        spaceBetween={50}
        slidesPerView={2}
      >
        {brands[1].map((brand, index) => (
          <SwiperSlide className="px-5" key={index}>
            <img className="grayscale" src={brand} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
