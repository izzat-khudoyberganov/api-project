import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin, ShoppingCart, User } from "lucide-react";
import { NavData } from "@/data";
import { Button } from "./ui/button";
import { CartModal, LikeModal, UserModal } from "./modals";
import { ThemeToggle } from "./ui/theme-toggle";

import { Icons } from "@/assets/icon";
import { Badge } from "./ui/badge";
import { MainContext } from "@/context/useMainContext";

const HeaderTop = () => {
  const [favourite, setFavourite] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);
  const [cart, setCart] = useState<boolean>(false);
  const { likedItems, cartItems } = useContext(MainContext);

  function handleFavouriteModal(): void {
    setFavourite((prev) => (prev = !prev));
  }

  function handleUsereModal(): void {
    setUser((prev) => (prev = !prev));
  }

  function handleCartModal(): void {
    setCart((prev) => (prev = !prev));
  }

  const likedItemsLenght = Array.isArray(likedItems) ? likedItems.length : 0;
  const cartItemsLength = Array.isArray(cartItems) ? cartItems.length : 0;
  return (
    <>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center justify-between gap-12">
          {NavData.map((el) => (
            <a
              key={el.id}
              href={el.href}
              className="font-bold text-xl text-[rgba(72,73,77,1)]"
            >
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

        <div className="flex items-center justify-between gap-3">
          <ThemeToggle />
          <div className="relative">
            {likedItemsLenght > 0 && (
              <Badge className="absolute -top-2 -right-2" variant="destructive">
                {likedItemsLenght}
              </Badge>
            )}
            <Button
              variant="ghost"
              size="icon-lg"
              onClick={handleFavouriteModal}
            >
              <Heart size={60} />
            </Button>
          </div>
          <Button variant="ghost" size="icon-lg" onClick={handleUsereModal}>
            <User />
          </Button>
          <div className="relative">
            <Button variant="ghost" size="icon-lg" onClick={handleCartModal}>
              {cartItemsLength > 0 && (
                <Badge
                  className="absolute -top-2 -right-2"
                  variant="destructive"
                >
                  {cartItemsLength}
                </Badge>
              )}
              <ShoppingCart />
            </Button>
          </div>
        </div>
      </div>

      <LikeModal open={favourite} onClose={handleFavouriteModal} />
      <UserModal open={user} onClose={handleUsereModal} />
      <CartModal open={cart} onClose={handleCartModal} />
    </>
  );
};

export default HeaderTop;
