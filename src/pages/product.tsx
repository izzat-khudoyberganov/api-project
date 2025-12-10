import { baseUrl, getData } from "@/api/https";
import PopularProducts from "@/components/popular-products";
import ProductSwiper from "@/components/product-swiper";
import type { ProductI } from "@/components/type";
import { QueryEndpoints } from "@/utils/endpoints";
import { QueryKeys } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const { id } = params;

  const { data } = useQuery<ProductI>({
    queryKey: [QueryKeys.products, id],
    queryFn: () => getData(`${baseUrl}${QueryEndpoints.products}/${id}`),
  });

  return (
    <>
      <section>
        <div className="container">
          <div className="flex items-start justify-between">
            {data?.thumbnail && Array.isArray(data.images) && (
              <ProductSwiper
                thumbnail={data?.thumbnail}
                images={data?.images}
              />
            )}
          </div>
        </div>
      </section>
      <PopularProducts />
    </>
  );
};

export default Product;
