import { getData } from "@/api/https";
import ProductList from "@/components/products-list";
import type { ProductInfoI } from "@/components/type";
import { Skeleton } from "@/components/ui/skeleton";
import { QueryEndpoints } from "@/utils/endpoints";
import { QueryKeys } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Category = () => {
  const params = useParams();
  const {slug} = params;

  const { data, isLoading, isError, error } = useQuery<ProductInfoI[]>({
    queryKey: [QueryKeys.products],
    queryFn: () =>
      getData(
        `${import.meta.env.VITE_BASE_URL}${QueryEndpoints.productsSlug}${slug}`
      ),
  });

  if (isLoading) {
    return (
      <div className="container">
        <div className="grid grid-cols-4 gap-8 mt-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-[434px]" />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container">
        <h2 className="font-bold mt-20 text-2xl text-red-500">
          {error.message} ⚡⚡⚡
        </h2>
      </div>
    );
  }

  return (
    <section className="mt-20">
      <div className="container">
        {
          Array.isArray(data) && <ProductList data={data}/>
        }
      </div>
    </section>
  );
};

export default Category;
