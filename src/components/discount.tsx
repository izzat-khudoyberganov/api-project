import img_1 from "@/assets/image/img-1.png";
import img_2 from "@/assets/image/image-2.png";

const Discount = () => {
  return (
    <section className="mt-24">
      <div className="container">
        <div className="flex items-center justify-center gap-5 bg-[rgba(28,98,205,1)] py-7">
          <div className="flex items-center gap-2">
            <img src={img_1} alt="" />
            <img src={img_2} alt="" />
          </div>

          <h2 className="text-4xl font-bold text-white max-w-[308px]">CКИДКИ <br /> на все запчасти до 70%</h2>

          <a href="#category" className="bg-white hover:scale-110 hover:bg-gray-200 transition-all font-medium text-2xl leading-12 px-10">ПОСМОТЕТЬ ВСЕ</a>
        </div>
      </div>
    </section>
  );
};

export default Discount;
