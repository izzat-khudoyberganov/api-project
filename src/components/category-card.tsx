import { Link } from "react-router-dom";
import type { CategoryCardPropsI } from "./type";

const CategoryCard = ({
  name,
  slug,
  image,
}: CategoryCardPropsI) => {
  return (
    <div className="border-2 border-gray-300 flex justify-between rounded-md overflow-hidden hover:border-transparent hover:shadow-md shadow-gray-300 transition-all group">
      <div className="flex flex-col justify-between p-4">
        <h2 className="font-bold text-2xl group-hover:text-[rgba(28,98,205,1)]">
          {name}
        </h2>
        <Link className="text-gray-400" to={`categories/${slug}`}>
          Подробее {" >"}
        </Link>
      </div>

      <img src={image} alt="" width={130} height={100} />
    </div>
  );
};

export default CategoryCard;
