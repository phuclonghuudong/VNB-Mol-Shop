import Text from "../ui/Text";

const SideBar = () => {
  return (
    <div className="bg-white w-3/15 border-r-2 border-gray-300 p-4">
      <div className="bg-red-100">
        <Text
          title="MolXiPi Shop"
          isUppercase
          isBold
          isColor={"text-orange-600"}
          isSize={"lg:text-xl text-lg"}
        />
      </div>
    </div>
  );
};

export default SideBar;
