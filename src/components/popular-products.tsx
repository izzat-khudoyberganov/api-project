import { useState } from "react";
import { QueryKeys } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";
import { type CategoriesDataI, type ProductResponse } from "./type";
import { Button } from "./ui/button";
import { baseUrl, getData } from "@/api/https";
import { QueryEndpoints } from "@/utils/endpoints";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import ProductCard from "./product-card";
import { Link } from "react-router-dom";

const PopularProducts = () => {
    const [querySlug, setQuerySlug] = useState<string>("electronics");
    const { data, isError, error } = useQuery<CategoriesDataI[]>({
        queryKey: [QueryKeys.category],
    });

    if (isError) {
        return (
            <div className='container'>
                <h2>{error.message}</h2>
            </div>
        );
    }

    const { data: productData } = useQuery<ProductResponse>({
        queryKey: [QueryKeys.products, querySlug],
        queryFn: () =>
            getData(`${baseUrl}${QueryEndpoints.productsSlug}${querySlug}`),
    });

    console.log(productData, "datatttttt");

    return (
        <section className='mt-20'>
            <div className='container'>
                <div className='flex flex-col gap-6'>
                    <h2 className='font-bold text-2xl'>Популярные товары</h2>
                    <div className='flex items-center gap-12'>
                        {Array.isArray(data) &&
                            data.map((el) => (
                                <Button
                                    key={el.id}
                                    variant='ghost'
                                    size='lg'
                                    onClick={() => setQuerySlug(el.slug)}
                                >
                                    {el.name}
                                </Button>
                            ))}
                    </div>
                    <Carousel className='w-full'>
                        <CarouselContent>
                            {Array.isArray(productData?.products) &&
                                productData.products.map((el) => (
                                    <CarouselItem
                                        key={el.id}
                                        className='basis-1/4'
                                    >
                                        <div className='p-1'>
                                            <ProductCard
                                                image={el.images[0]}
                                                price={el.price}
                                                title={el.title}
                                                id={el.id}
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                        </CarouselContent>
                        <Link
                            to='products'
                            className='mt-10 mx-auto block w-max py-4 px-11 bg-gray-200 font-normal text-base'
                        >
                            Показать еще
                        </Link>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default PopularProducts;
