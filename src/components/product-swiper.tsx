import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";

const ProductSwiper = ({
  thumbnail,
  images,
}: {
  thumbnail: string;
  images: string[];
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<
    string | SwiperType | null | undefined
  >(null);

  return (
    <div className="mt-10">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images && images.length > 0 ? (
          images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <img src={thumbnail} />
          </SwiperSlide>
        )}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-5"
      >
        {images && images.length > 0 ? (
          images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <img src={thumbnail} />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
