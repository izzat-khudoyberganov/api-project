import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "@/context/useMainContext";
import LikeItem from "../like-item";


function LikeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { likedItems } = useContext(MainContext);
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px] md:max-w-6/12 max-h-1/2 overflow-y-auto">
          <DialogHeader className="border-b-2 pb-4">
            <DialogTitle className="text-3xl font-bold">Favourite products</DialogTitle>
          </DialogHeader>
          {
            likedItems.map((item) => (
              <LikeItem key={item.id} {...item} />
            ))
          }
          <DialogFooter>
            <div className="flex items-center justify-between w-full mt-10">
              <div className="flex flex-col gap-4">
                <p className="text-3xl font-bold">Итого: 66 000₽</p>
                <Link to={'/'} className="bg-blue-500 text-xl font-bold text-white px-14 py-4">Оформить заказ</Link>
              </div>
              <Link to={'/'} className="bg-transparent text-xl font-bold text-blue-500 px-8 py-4 border-2 border-blue-500">Продолжить покупки</Link>
            </div>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  );
}

export default LikeModal;
