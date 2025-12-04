import { baseUrl, getData } from "@/api/https";
import { QueryEndpoints } from "@/utils/endpoints";
import { QueryKeys } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { Skeleton } from "./ui/skeleton";

const HeaderNav = () => {
  const { data, isLoading } = useQuery<string[]>({
    queryKey: [QueryKeys.category],
    queryFn: () => getData(`${baseUrl}${QueryEndpoints.categories}`),
  });

  const category = data?.slice(0, 9) || []

  if (isLoading) {
    return <Skeleton className="w-full h-[52px] bg-gray-200" />;
  }

  return (
    <nav className=" bg-gray-200 no-scrollbar">
      <div className="flex items-center whitespace-nowrap gap-10 px-4">
        {Array.isArray(category) &&
          category.map((el) => (
            <NavLink
              key={el}
              to={`categories/${el}`}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-blue-600 font-bold py-3.5 capitalize"
                  : "border-none py-3.5 capitalize"
              }
            >
              {el}
            </NavLink>
          ))}
      </div>
    </nav>
  );
};

export default HeaderNav;
