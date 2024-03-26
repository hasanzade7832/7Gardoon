// import MainSlider from "../components/mainSlider";
import ProductsSlider from "@/components/products-slider";
import Categories from "@/components/graphic-cats";
import Blogs from "@/components/blogs";
import Banners from "@/components/banners";

const Home = () => {
  return (
    <div>
      {/* <MainSlider /> */}
      <Categories />
      <ProductsSlider title="اپیکیشن ها" linkComp="/" />
      <ProductsSlider title="کتاب ها" linkComp="/" />
      <Banners />
      <Blogs />
    </div>
  );
};

export default Home;
