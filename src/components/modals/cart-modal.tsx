import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CartItem from "../cart-item";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useContext } from "react";
import { MainContext } from "@/context/useMainContext";

function CartModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const navigate = useNavigate();

  function navigateToProducts(path: string): void {
    onClose();
    navigate(path);
  }

  const {cartItems} = useContext(MainContext)

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-6/12 max-h-1/2 overflow-y-auto">
        <DialogHeader className="border-b-2 pb-4">
          <DialogTitle className="text-3xl font-bold">
            Favourite products
          </DialogTitle>
        </DialogHeader>
        {cartItems.map((el) => (
          <CartItem key={el.id} {...el} />
        ))}
        <DialogFooter>
          <div className="flex items-end justify-between w-full mt-10">
            <div className="flex flex-col gap-4">
              <p className="text-3xl font-bold">Итого: 66 000₽</p>
              <Button
                onClick={() => navigateToProducts("/")}
                variant={"default"}
                className="px-16 py-8 text-xl"
              >
                Оформить заказ
              </Button>
            </div>
            <Button
              variant={"outline"}
              className="px-16 py-8 text-xl"
              onClick={() => navigateToProducts("/products")}
            >
              Продолжить покупки
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CartModal;
