import { baseUrl, getData } from "@/api/https";
import CategoryCard from "@/components/category-card";
import { Skeleton } from "@/components/ui/skeleton";
import { QueryEndpoints } from "@/utils/endpoints";
import { QueryKeys } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";

const CategoryList = () => {
  const { data, isLoading, error, isError } = useQuery<string[]>({
    queryKey: [QueryKeys.category],
    queryFn: () => getData(`${baseUrl}${QueryEndpoints.categories}`),
  });

  if (isLoading) {
    return (
      <div className="container">
        <div className="grid grid-cols-3 gap-8 mt-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-[130px]" />
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
        <div className="grid grid-cols-3 gap-8">
          {Array.isArray(data) &&
            data.map((el) => <CategoryCard key={el} name={el} slug={`${el}`} />)}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
