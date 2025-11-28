import type { FooterNavDataI, FooterSocialMediaIcons, NavDataI } from "@/components/type";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const NavData: NavDataI[] = [
  {
    id: 0,
    href: "#!",
    text: "Магазины",
  },
  {
    id: 1,
    href: "#!",
    text: "Акции",
  },
  {
    id: 2,
    href: "#!",
    text: "Доставка и оплата",
  },
];

export const FooterInformationNavData: FooterNavDataI[] = [
  {
    id: 0,
    href: "#!",
    text: "О компании",
  },
  {
    id: 1,
    href: "#!",
    text: "Контакты",
  },
  {
    id: 2,
    href: "#!",
    text: "Акции",
  },
  {
    id: 3,
    href: "#!",
    text: "Магазины",
  },
];

export const FooterECommerceNavData: FooterNavDataI[] = [
  {
    id: 0,
    href: "#!",
    text: "Доставка и самовывоз",
  },
  {
    id: 1,
    href: "#!",
    text: "Оплата",
  },
  {
    id: 2,
    href: "#!",
    text: "Возврат-обмен",
  },
  {
    id: 3,
    href: "#!",
    text: "Новости",
  },
];

export const FooterSocialMediaIconsData: FooterSocialMediaIcons[] = [
  {
    id: 0,
    icon: Instagram
  },
  {
    id: 1,
    icon: Twitter
  },
  {
    id: 2,
    icon: Facebook
  },
  {
    id: 3,
    icon: Youtube
  }
]
