import { useContext } from "react";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { currencyFormatter } from "@/utils/helper";
import { MainContext } from "@/context/useMainContext";

const CartItem = ({
  image,
  title,
  price,
  id,
  quantity,
}: {
  image: string;
  title: string;
  price: number;
  id: number;
  quantity: number;
}) => {
  const { addOne, removeOne, removeFromCart } = useContext(MainContext);

  const pricePerProduct = price * quantity;
  const new_price_per_product = currencyFormatter(pricePerProduct);

  return (
    <div className="flex flex-col gap-4 py-4 bg-gray-50 px-4 rounded-md">
      <div className="flex items-start justify-between">
        <div className="flex gap-3 items-start">
          <img
            src={image}
            alt={title}
            className="w-[136px] h-[120px] object-cover"
          />

          <div className="flex flex-col justify-between h-28">
            <h2 className="font-medium text-2xl">{title}</h2>

            <div className="flex items-center gap-2">
              <Button onClick={() => removeOne(id)} disabled={quantity == 1}>
                -
              </Button>
              <span>{quantity}</span>
              <Button onClick={() => addOne(id)} disabled={quantity === 10}>
                +
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-28 justify-between">
          <Button variant={"ghost"} onClick={() => removeFromCart(id)}>
            <Trash2 />
            Delete
          </Button>
          <span className="font-semibold text-xl">{new_price_per_product}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
