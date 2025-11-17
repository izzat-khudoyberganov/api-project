import HeaderNav from "./header-nav";
import HeaderTop from "./header-top";

const Header = () => {
  return (
    <header>
      <div className="container">
        <HeaderTop />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
