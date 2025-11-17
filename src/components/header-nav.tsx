import { HeaderNavData } from "@/data";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-200">
      {HeaderNavData.map(({ id, text, href }) => (
        <NavLink
          key={id}
          to={href}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-blue-600 font-bold py-3.5"
              : "border-none py-3.5"
          }
        >
          {text}
        </NavLink>
      ))}
    </nav>
  );
};

export default HeaderNav;
