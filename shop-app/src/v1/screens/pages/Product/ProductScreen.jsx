import FilterOptions from "../../../components/layouts/FilterOptions";
import CardProduct from "../../../components/ui/CardProduct";
import TitleHeaderPage from "../../../components/ui/TitleHeaderPage";
import TitlePage from "../../../components/ui/TittlePage";

const ProductScreen = () => {
  return (
    <section className="mx-auto">
      <TitleHeaderPage title="Sản phẩm" />

      <div className="px-4 py-5 w-full h-full  flex justify-between items-start gap-5">
        <FilterOptions />

        <div className="w-full text-gray-700">
          <TitlePage title="Vợt cầu lông" isSort={true} />

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 ">
            <CardProduct />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductScreen;
