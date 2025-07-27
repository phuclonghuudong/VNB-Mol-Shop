import CardProduct from "../../../components/ui/CardProduct";
import TitleHeaderPage from "../../../components/ui/TitleHeaderPage";
import SortOptions from "./SortOptions";
import TitlePage from "./TitlePage";

const ProductScreen = () => {
  return (
    <section className="mx-auto">
      <TitleHeaderPage title="Sản phẩm" />

      <div className="px-4 py-5 w-full h-full  flex justify-between items-start gap-5">
        <div className="w-2/7  border-gray-200 border rounded-md shadow-lg lg:block hidden">
          <div className="w-full h-200 p-4 ">
            <SortOptions />
          </div>
        </div>

        <div className="w-full text-gray-700">
          <TitlePage />

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 ">
            <CardProduct />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductScreen;
