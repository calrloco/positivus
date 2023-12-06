import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
const brands = [
  ["amazon.svg", "dribble.svg", "hubspot.svg"],
  ["netflix.svg", "notion.svg", "zoom.svg"],
];
export default function Brand() {
  return (
    <div>
      <Swiper
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        className="mb-5"
        speed={1000} 
        spaceBetween={50}
        slidesPerView={2.2}
        style={{ transitionTimingFunction: 'linear' }}
      >
        {brands[0].map((brand, index) => (
          <SwiperSlide className="first:ml-5" key={index}>
            <img src={brand} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop
        style={{ transitionTimingFunction: 'linear' }}
        speed={1000} 
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        spaceBetween={50}
        slidesPerView={2.2}
      >
        {brands[1].map((brand, index) => (
          <SwiperSlide className="first:ml-5" key={index}>
            <img src={brand} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
