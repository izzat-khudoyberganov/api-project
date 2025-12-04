import ProductCard from "./product-card";
import type { ProductResponse } from "./type";

const ProductList = ({ data }: { data: ProductResponse }) => {
    return (
        <div className='grid grid-cols-4 gap-8'>
            {data.products.map((el) => (
                <ProductCard
                    image={el.images[0]}
                    price={el.price}
                    title={el.title}
                    id={el.id}
                />
            ))}
        </div>
    );
};

export default ProductList;
