import { baseUrl, getData } from "@/api/https";
import type { ProductI } from "@/components/type";
import { QueryEndpoints } from "@/utils/endpoints";
import { QueryKeys } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Product = () => {
    const params = useParams();
    const { id } = params;

    const { data } = useQuery<ProductI>({
        queryKey: [QueryKeys.products],
        queryFn: () => getData(`${baseUrl}${QueryEndpoints.products}/${id}`),
    });
    return <div>{JSON.stringify(data)}</div>;
};

export default Product;
