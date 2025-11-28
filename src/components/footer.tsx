import FooterForm from "./footer-form";
import {
  FooterECommerceNavData,
  FooterInformationNavData,
  FooterSocialMediaIconsData,
} from "@/data";

const Footer = () => {
  return (
    <footer className="mt-[98px] pt-11 pb-7 bg-gray-200">
      <div className="container">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-8">
            <h3 className="font-bold text-sm w-[250px]">
              Подпишитесь на нашу рассылку и узнавайте о акция быстрее
            </h3>
            <FooterForm />
          </div>

          <div className="flex flex-col gap-5 items-start">
            <h3 className="font-bold text-sm w-[250px]">Информация</h3>
            <nav className="flex flex-col gap-3">
              {FooterInformationNavData.map((el) => (
                <a key={el.id} href={el.href} className="font-normal text-sm">
                  {el.text}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-5 items-start">
            <h3 className="font-bold text-sm w-[250px]">Информация</h3>
            <nav className="flex flex-col gap-3">
              {FooterECommerceNavData.map((el) => (
                <a key={el.id} href={el.href} className="font-normal text-sm">
                  {el.text}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex gap-8 items-center self-center">
            {FooterSocialMediaIconsData.map((el) => {
              const IconComponent = el.icon;
              return IconComponent ? <IconComponent size={24} /> : null;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
