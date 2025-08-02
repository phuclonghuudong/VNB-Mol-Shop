import ButtonComponent from "../../../components/ui/ButtonComponent";
import FormInput from "../../../components/ui/FormInput";
import Text from "../../../components/ui/Text";
import TitleHeaderPage from "../../../components/ui/TitleHeaderPage";

const CheckWarrantyScreen = () => {
  return (
    <section className="mx-auto">
      <TitleHeaderPage title="Kiểm tra bảo hành" />

      <div className="lg:px-12 lg:pb-8 px-4 w-2/5 flex flex-col gap-3">
        <Text title={"Kiểm tra bảo hành"} isUppercase isBold />

        <FormInput name={""} title={"Điện thoại*"} isAutoFocus />

        <ButtonComponent title={"Tra cứu thông tin bảo hành"} color="orange" />
      </div>
    </section>
  );
};

export default CheckWarrantyScreen;
