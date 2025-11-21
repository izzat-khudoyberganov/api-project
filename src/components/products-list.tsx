import ProductCard from "./product-card";
import type { ProductInfoI } from "./type";

const ProductList = ({ data }: { data: ProductInfoI[] }) => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {data.map((el) => (
        <ProductCard image={el.images[0]} price={el.price} title={el.title} />
      ))}
    </div>
  );
};

export default ProductList;
