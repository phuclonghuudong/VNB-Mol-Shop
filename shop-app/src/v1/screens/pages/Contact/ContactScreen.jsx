import ButtonComponent from "@/v1/components/shop/ui/ButtonComponent";
import FormInput from "@/v1/components/shop/ui/FormInput";
import Text from "@/v1/components/shop/ui/Text";
import TitleHeaderPage from "@/v1/components/shop/ui/TitleHeaderPage";

const ContactScreen = () => {
  return (
    <section className="mx-auto">
      <TitleHeaderPage title="Liên hệ" />
      <div className="lg:w-1/2 w-full  p-4">
        <Text title={"Nơi giải đáp mọi thắc mắc của bạn?"} isUppercase isBold />

        <div className="flex justify-start items-center py-2">
          <p className="font-semibold">
            HOTLINE:{" "}
            <span className="hover:text-slate-700 text-red-600 text-lg font-bold">
              <span>0123456789</span> | <span>0987654321</span>
            </span>
          </p>
        </div>

        <div className="flex justify-start items-center py-2">
          <p className="font-semibold">
            EMAIL:{" "}
            <span className="hover:text-slate-700 text-red-600 text-lg font-bold">
              info@shopvnb.com
            </span>
          </p>
        </div>

        <Text title={"Liên hệ với chúng tôi"} isUppercase isBold />

        <div className=" grid gap-4">
          <div className="flex   justify-between items-center gap-4">
            <FormInput placeholder={"Họ va tên"} name={""} />
            <FormInput placeholder={"Email"} name={""} />
          </div>

          <FormInput placeholder={"Điện thoại"} name={""} />
          <FormInput placeholder={"Nội dung"} name={""} />

          <div className="md:w-1/4 w-full">
            <ButtonComponent title="Gửi thông tin" color="red" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactScreen;
