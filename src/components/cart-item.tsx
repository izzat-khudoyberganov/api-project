import { useState } from "react";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import img_1 from "@/assets/image/swiper-img.jpg";
import { currencyFormatter } from "@/utils/helper";

const CartItem = () => {
  const [count, setCount] = useState<number>(1);
  const price = currencyFormatter(3000);
  function increment(): void {
    setCount((prev) => prev + 1);
  }

  function decrement(): void {
    setCount((prev) => prev - 1);
  }
  return (
    <div className="flex flex-col gap-4 py-4 bg-gray-50 px-4 rounded-md">
      <div className="flex items-start justify-between">
        <div className="flex gap-3 items-start">
          <img
            src={img_1}
            alt=""
            className="w-[136px] h-[120px] object-cover"
          />

          <div className="flex flex-col justify-between h-28">
            <h2 className="font-medium text-2xl">
              Lorem ipsum dolor sit amet.
            </h2>

            <div className="flex items-center gap-2">
              <Button onClick={decrement}>-</Button>
              <span>{count}</span>
              <Button onClick={increment}>+</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-28 justify-between">
          <Button variant={"ghost"}>
            <Trash2 />
            Delete
          </Button>
          <span className="font-semibold text-xl">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
