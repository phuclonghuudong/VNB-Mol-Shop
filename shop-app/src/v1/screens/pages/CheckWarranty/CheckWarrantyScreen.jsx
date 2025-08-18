import ButtonComponent from "@/v1/components/shop/ui/ButtonComponent";
import FormInput from "@/v1/components/shop/ui/FormInput";
import Text from "@/v1/components/shop/ui/Text";
import TitleHeaderPage from "@/v1/components/shop/ui/TitleHeaderPage";

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
