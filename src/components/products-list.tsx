import ProductCard from "./product-card";
import type { ProductI } from "./type";

const ProductList = ({ data }: { data: ProductI[] }) => {
    return (
        <div className='grid grid-cols-4 gap-8'>
            {Array.isArray(data) && data.map((el) => (
                <ProductCard
                    image={el.images[0]}
                    price={el.price}
                    title={el.title}
                    id={el.id}
                    description={el.description}
                    rating={el.rating}
                />
            ))}
        </div>
    );
};

export default ProductList;
