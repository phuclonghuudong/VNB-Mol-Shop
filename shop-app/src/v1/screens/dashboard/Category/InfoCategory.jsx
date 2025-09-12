import Text from "../../../components/manage/ui/Text";

const InfoCategory = ({ data }) => {
  console.log("SET ITEM:", data);

  return (
    <div className="bg-white md:flex-[3] w-full rounded-md shadow-lg p-2">
      <Text title={"Thông tin"} isUppercase isBold />
    </div>
  );
};

export default InfoCategory;
