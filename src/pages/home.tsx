import Banner from "@/components/banner";
import Categories from "@/components/categories";
import Discount from "@/components/discount";
import PopularProducts from "@/components/popular-products";
import Search from "@/components/search";

const Home = () => {
    return (
        <>
            <Banner />
            <Search />
            <Categories />
            <PopularProducts />
            <Discount />
            <PopularProducts />
        </>
    );
};

export default Home;
