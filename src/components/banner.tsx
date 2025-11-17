import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import swiper_img from "../../public/swiper-img.jpg";

function Banner() {
  return (
    <div className="container">
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

        <Card className="w-full max-w-sm">
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2"></div>
                <div className="grid gap-2">
                  <div className="flex items-center">Card</div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Banner;
