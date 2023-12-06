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
    <div>
      <Swiper
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
       }}
       speed="2000"
        className="mb-5"
        spaceBetween={50}
        slidesPerView={2.2}
        style={{ transitionTimingFunction: 'linear' }}
      >
        {brands[0].map((brand, index) => (
          <SwiperSlide key={index}>
            <img src={brand} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop
        style={{ transitionTimingFunction: 'linear' }}
        modules={[Autoplay]}
        speed="2000"
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        spaceBetween={50}
        slidesPerView={2.2}
      >
        {brands[1].map((brand, index) => (
          <SwiperSlide className="" key={index}>
            <img src={brand} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
