import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/ui/ButtonComponent";
import OTPInput from "../../components/ui/OTPInput";
import Text from "../../components/ui/Text";
import TitleCategoryList from "../../components/ui/TitleCategoryList";

const ConFirmOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);
  const [loading, setLoading] = useState(false);
  const validateValue = Object.values(data).every((el) => el);

  const handleSubmit = () => {
    navigate("/thanh-vien/doi-mat-khau");
  };
  return (
    <section>
      <TitleCategoryList title={"Xác nhận OTP"} isUppercase />

      <div className="flex flex-col gap-4">
        <OTPInput data={data} setData={setData} inputRef={inputRef} />

        <ButtonComponent
          title={"Xác nhận OTP"}
          color="orange"
          isUppercase
          onClick={handleSubmit}
        />
      </div>

      <div className="text-right ">
        <Link to={"/thanh-vien/dang-nhap"}>
          <Text title="Đăng nhập tại đây" isSize={"text-md"} isHover />
        </Link>
      </div>
    </section>
  );
};

export default ConFirmOTP;
