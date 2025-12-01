import { baseUrl, getData } from "@/api/https";
import ProductCard from "@/components/product-card";
import type { ProductInfoI } from "@/components/type";
import { Skeleton } from "@/components/ui/skeleton";
import { QueryEndpoints } from "@/utils/endpoints";
import { QueryKeys } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const { data, isLoading, error, isError } = useQuery<ProductInfoI[]>({
    queryKey: [QueryKeys.products],
    queryFn: () => getData(`${baseUrl}${QueryEndpoints.products}`),
  });

  console.log(data);

  if (isLoading) {
    return (
      <div className="container">
        <Skeleton className="w-40 h-8 my-10" />
        <div className="grid grid-cols-4 gap-8 ">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-[432px]" />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">
        <h2 className="font-bold text-3xl mt-10 text-red-500">
          {error.message}
        </h2>
      </div>
    );
  }

  return (
    <section className="mt-10">
      <div className="container">
        <h2 className="font-bold text-3xl">All products</h2>
        <div className="grid grid-cols-4 gap-8 mt-10">
          {Array.isArray(data) &&
            data.map((el) => (
              <ProductCard
                key={el.id}
                title={el.title}
                image={el.images[0]}
                price={el.price}
                id={el.id}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
