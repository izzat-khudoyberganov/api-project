import { getData } from "@/api/https";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Category = () => {
  const params = useParams();

  const {data} = useQuery({
    queryKey: ['products'],
    queryFn: () => getData(`${import.meta.env.VITE_BASE_URL}/products/slug/${params.slug}`)
  })

  return (
    <section className="mt-20">
      <div className="container">{`${params.slug}`}</div>
      <pre>{JSON.stringify(data)}</pre>
    </section>
  );
};

export default Category;
