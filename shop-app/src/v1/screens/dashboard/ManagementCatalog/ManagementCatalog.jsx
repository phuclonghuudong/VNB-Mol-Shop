import listManagementCatalog from "../../../common/listManagementCatalog";
import CardCatalog from "./CardCatalog";

const ManagementCatalog = () => {
  return (
    <section className=" ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {listManagementCatalog?.map((x, index) => {
          return <CardCatalog data={x} key={index} />;
        })}
      </div>
    </section>
  );
};

export default ManagementCatalog;
