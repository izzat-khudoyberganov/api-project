import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, ShoppingCart, User } from "lucide-react";
import { NavData } from "@/data";
import { Button } from "./ui/button";
import { CartModal, LikeModal, UserModal } from "./modals";

import { Icons } from "@/assets/icon";

const HeaderTop = () => {
  const [favourite, setFavourite] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);
  const [cart, setCart] = useState<boolean>(false);

  function handleFavouriteModal(): void {
    setFavourite((prev) => (prev = !prev));
  }

  function handleUsereModal(): void {
    setUser((prev) => (prev = !prev));
  }

  function handleCartModal(): void {
    setCart((prev) => (prev = !prev));
  }

  return (
    <div className="flex items-center justify-between py-5">
      <div className="flex items-center justify-between gap-12">
        {NavData.map((el) => (
          <a key={el.id} href={el.href} className="font-bold text-xl text-[rgba(72,73,77,1)]">
           {el.text}
          </a>
        ))}
      </div>

      <Link to="/">
        <Icons.logo />
      </Link>

      <div className="flex items-center justify-between">
        <a
          href="#!"
          className="font-bold text-xl text-[rgba(72,73,77,1)] flex items-center gap-2"
        >
          <MapPin />
          Москва, ул. Науки 25
        </a>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon-lg" onClick={handleFavouriteModal}>
          <Heart />
        </Button>
        <Button variant="ghost" size="icon-lg" onClick={handleUsereModal}>
          <User />
        </Button>
        <Button variant="ghost" size="icon-lg" onClick={handleCartModal}>
          <ShoppingCart />
        </Button>
      </div>

      <LikeModal open={favourite} onClose={handleFavouriteModal} />
      <UserModal open={user} onClose={handleUsereModal} />
      <CartModal open={cart} onClose={handleCartModal} />
    </div>
  );
};

export default HeaderTop;
