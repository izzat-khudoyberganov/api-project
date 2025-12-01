import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import swiper_img from "@/assets/image/swiper-img.jpg";
import SuzukiOutboardAd from "./banner-card";

function Banner() {
  return (
    <div className="container" id="category">
      <div className="w-full mt-20 flex justify-between items-center">
        <Carousel className="w-3/5">
          <CarouselContent className="h-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} >
                <img src={swiper_img}  height={400} alt="" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <SuzukiOutboardAd/>
      </div>
    </div>
  );
}

export default Banner;
