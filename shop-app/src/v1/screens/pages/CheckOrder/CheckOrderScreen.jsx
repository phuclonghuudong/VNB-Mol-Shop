import ButtonComponent from "../../../components/ui/ButtonComponent";
import FormInput from "../../../components/ui/FormInput";
import Text from "../../../components/ui/Text";
import TitleHeaderPage from "../../../components/ui/TitleHeaderPage";

const CheckOrderScreen = () => {
  return (
    <section className="mx-auto">
      <TitleHeaderPage title="Kiểm tra đơn hàng" />

      <div className="lg:px-12 lg:pb-8 px-4 w-2/5 flex flex-col gap-3">
        <Text title={"Kiểm tra đơn hàng"} isUppercase isBold />

        <FormInput
          name={""}
          title={"Mã đơn hàng/ Số điện thoại*"}
          isAutoFocus
        />

        <ButtonComponent title={"Tra cứu đơn hàng"} color="orange" />
      </div>
    </section>
  );
};

export default CheckOrderScreen;
