import { baseUrl, getData } from "@/api/https";
import { QueryEndpoints } from "@/utils/endpoints";
import { QueryKeys } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import type { CategoriesDataI } from "./type";
import { Skeleton } from "./ui/skeleton";

const HeaderNav = () => {
  const { data, isLoading } = useQuery<CategoriesDataI[]>({
    queryKey: [QueryKeys.category],
    queryFn: () => getData(`${baseUrl}${QueryEndpoints.categories}?limit=6`),
  });

 if (isLoading) {
  return <Skeleton className="w-full h-[52px] bg-gray-200"/>
 }
  
  return (
    <nav className="flex items-center justify-between bg-gray-200">
      {Array.isArray(data) && data.map(({ id, name, slug }) => (
        <NavLink
          key={id}
          to={`categories/${slug}`}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-blue-600 font-bold py-3.5"
              : "border-none py-3.5"
          }
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
};

export default HeaderNav;
