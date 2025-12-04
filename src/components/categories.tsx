import { QueryKeys } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";
import { baseUrl, getData } from "@/api/https";
import { QueryEndpoints } from "@/utils/endpoints";
import CategoryCard from "./category-card";

const Categories = () => {
    const { data, isLoading, error, isError } = useQuery<string[]>({
        queryKey: [QueryKeys.category],
        queryFn: () => getData(`${baseUrl}${QueryEndpoints.categories}`),
    });

    const category: string[] = data?.slice(0, 6) ?? [];

    if (isLoading) {
        return (
            <div className='container'>
                <div className='grid grid-cols-3 gap-8 mt-20'>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Skeleton key={i} className='h-[130px]' />
                    ))}
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className='container'>
                <h2 className='font-bold mt-20 text-2xl text-red-500'>
                    {error.message} ⚡⚡⚡
                </h2>
            </div>
        );
    }

    return (
        <section className='mt-20'>
            <div className='container'>
                <div className='grid grid-cols-3 gap-8'>
                    {Array.isArray(category) &&
                        category.map((el) => (
                            <CategoryCard key={el} name={el} slug={el} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
