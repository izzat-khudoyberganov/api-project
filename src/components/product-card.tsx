import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { currencyFormatter, truncateString } from "@/utils/helper";
import { StarRating } from "react-flexible-star-rating";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import { myReucer } from "@/store/store";
import { ADD_TO_CART, ADD_TO_LIKE } from "@/store/type";
import type { ProductCardPropsI } from "./type";

const ProductCard = ({
  image,
  title,
  price,
  id,
  description,
  rating,
}: ProductCardPropsI) => {
  const currency = currencyFormatter(price),
    my_title = truncateString(title, 25),
    my_description = truncateString(description, 60);

  const [state, dispatch] = useReducer(myReucer, {
    image,
    title,
    price,
    quantity: 1,
  });
  console.log(state);

  const handleRatingChange = (rating: number) => {
    console.log(`New rating: ${rating}`);
  };

  const new_rating: number = rating ? Math.round(rating) : 0;
  return (
    <Card className="w-full h-[434px] rounded-[1px] relative overflow-hidden">
      <CardHeader>
        <Button
          variant="ghost"
          size="icon-lg"
          className="ml-auto absolute top-3 right-5"
          onClick={() => dispatch({ type: ADD_TO_LIKE })}
        >
          <Heart />
        </Button>
      </CardHeader>
      <CardContent className="px-3">
        <img
          src={image}
          alt={title}
          className="w-[250px] h-[190px] object-contain hover:scale-130 transition-transform hover:transition-transform mx-auto"
        />
        <Link
          to={`../product/${id}`}
          className="mt-6 block hover:text-blue-500 transition-colors font-semibold text-xl text-center truncate-title"
        >
          {my_title}
        </Link>
        <p className="text-gray-600 mb-2 text-center">{my_description}</p>
        <div className="flex justify-center">
          <StarRating
            onRatingChange={handleRatingChange}
            initialRating={rating ? new_rating : 0}
            isHalfRatingEnabled={true}
            dimension={7}
          />
        </div>
        <span className="font-bold text-3xl block mt-2 text-center">
          {currency}
        </span>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          variant="ghost"
          size="icon-lg"
          className="absolute bottom-0 right-0 rounded-none rounded-tl-2xl bg-[rgba(28,98,205,1)] group transition-colors px-8 "
          onClick={() => dispatch({ type: ADD_TO_CART })}
        >
          <ShoppingCart className="text-white transition-colors group-hover:text-black" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
