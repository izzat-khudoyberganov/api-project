import { baseUrl, getData } from "@/api/https";
import PopularProducts from "@/components/popular-products";
import ProductSwiper from "@/components/product-swiper";
import type { ProductI } from "@/components/type";
import { Skeleton } from "@/components/ui/skeleton";
import { QueryEndpoints } from "@/utils/endpoints";
import { QueryKeys } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";
import { StarRating } from "react-flexible-star-rating";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const { id } = params;

  const { data, isLoading, error, isError } = useQuery<ProductI>({
    queryKey: [QueryKeys.products, id],
    queryFn: () => getData(`${baseUrl}${QueryEndpoints.products}/${id}`),
  });

  if (isLoading) {
    return (
      <div className="container">
        <Skeleton className="w-" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">
        <h2 className="mt-10">
          Error: {error instanceof Error ? error.message : "Unknown error"}
        </h2>
      </div>
    );
  }

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
        <div className="container">
          <div className="flex flex-col gap-5 mt-10">
            {Array.isArray(data?.reviews) &&
              data.reviews.map((el) => (
                <div>
                  <p>{el.reviewerName}</p>

                  <StarRating
                    initialRating={el.rating}
                    isHalfRatingEnabled={true}
                    dimension={7}
                    isReadOnly={true}
                  />
                  <p>{el.comment}</p>
                  <p>{el.date}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
      <PopularProducts />
    </>
  );
};

export default Product;
