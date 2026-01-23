

const SuzukiOutboardAd = () => {
  return (
    <div className="w-[265px] h-[397px] bg-white border border-gray-200 shadow-lg flex flex-col">
      
      {/* Top section: Sale tag and Prices */}
      <div className="relative">
        {/* "АКЦИЯ" (Sale) tag */}
        <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1">
          АКЦИЯ
        </div>

        {/* Prices */}
        <div className="pt-3 pr-4 pb-1 flex justify-end items-baseline">
          <span className="text-3xl font-bold text-blue-600 mr-2">190 000 Р</span>
          <span className="text-sm text-gray-400 line-through">225 000 Р</span>
        </div>
      </div>
      

      {/* Product Image and SUZUKI logo (Mockup) */}
      <div className="flex-grow flex items-center justify-center p-4 relative">
        {/* Placeholder for the actual image */}
        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500">
          {/* Image placeholder - replace with your image tag */}
          {/* <img src="..." alt="Suzuki Outboard Motor" /> */}
          Image Placeholder
        </div>
        {/* Suzuki Logo Placeholder */}
        <div className="absolute top-6 left-12 text-lg font-bold text-red-600">SUZUKI</div>
      </div>

      {/* Product Description */}
      <div className="p-4 text-center">
        <p className="text-sm">Лодочный мотор</p>
        <p className="text-lg font-semibold">Suzuki DF9.9BRS</p>
      </div>

      {/* Bottom section: Action Date */}
      <div className="bg-blue-600 p-4 text-center text-white">
        <p className="text-sm">Акция действует до</p>
        <p className="text-xl font-bold">31.08.2020</p>
      </div>
    </div>
  );
};

export default SuzukiOutboardAd;
