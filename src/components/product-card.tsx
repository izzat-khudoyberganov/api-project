import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { currencyFormatter } from "@/utils/helper";
import type { ProductCardPropsI } from "./type";

const ProductCard = ({ image, title, price }: ProductCardPropsI) => {
  const currency = currencyFormatter(price);

  return (
    <Card className="w-full rounded-[1px] relative">
      <CardHeader>
        <Button
          variant="ghost"
          size="icon-lg"
          className="ml-auto absolute top-3 right-5"
        >
          <Heart />
        </Button>
      </CardHeader>
      <CardContent>
        <img
          src={image}
          alt={title}
          className="w-[250px] h-[190px] object-contain"
        />
        <h2 className="mt-6 font-normal text-lg text-center">{title}</h2>
        <span className="font-bold text-3xl block mt-6 text-center">
          {currency}
        </span>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          variant="ghost"
          size="icon-lg"
          className="absolute bottom-0 right-0 rounded-none rounded-tl-2xl bg-[rgba(28,98,205,1)] group transition-colors px-8 "
        >
          <ShoppingCart className="text-white transition-colors group-hover:text-black" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
