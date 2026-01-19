import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { currencyFormatter } from "@/utils/helper";
import { useContext } from "react";
import { MainContext } from "@/context/useMainContext";

const LikeItem  = ({
  image,
  title,
  price,
  id,
  isInCart
}: {
  image: string;
  title: string;
  price: number;
  id: number;
  isInCart: boolean;
}) => {
  const new_price = currencyFormatter(price);
  const { addToCart, removeFromCart, removeFromLike } = useContext(MainContext);
  
  return (
    <div className="flex flex-col gap-4 py-4 bg-gray-50 px-4 rounded-md">
      <div className="flex items-start justify-between">
        <div className="flex gap-3 items-start">
          <img
            src={image}
            alt=""
            className="w-[136px] h-[120px] object-cover"
          />

          <div className="flex flex-col justify-between h-28">
            <h2 className="font-medium text-2xl">{title}</h2>
            <div className="flex gap-2 items-center">
              <Button onClick={() => isInCart ? removeFromCart(id) : addToCart({image, title, price, id})}>
                {isInCart ? "Remove from Cart" : "Add to Cart"}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-28 justify-between">
          <Button variant={"ghost"} onClick={() => removeFromLike(id)}>
            <Trash2 />
            Delete
          </Button>
          <span className="font-semibold text-xl">{new_price}</span>
        </div>
      </div>
    </div>
  );
};

export default LikeItem;
