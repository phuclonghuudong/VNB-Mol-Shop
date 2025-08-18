import { AiFillLike } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { HiBanknotes } from "react-icons/hi2";

const LogoBanner = () => {
  const ServiceCard = ({ icon, title, subtitle }) => (
    <div className="bg-white rounded p-4 grid lg:flex shadow animate-pulse text-orange-600 text-center items-center justify-items-center lg:justify-between w-full">
      <div className="w-10">{icon}</div>
      <div className="w-full">
        <p className="font-semibold">{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="p-4 grid sm:grid-cols-2 grid-cols-1 lg:flex justify-around items-center gap-3 text-xs xl:text-base">
      <ServiceCard
        icon={<FaShippingFast size={30} />}
        title="Vận chuyển TOÀN QUỐC"
        subtitle="Thanh toán khi nhận hàng"
      />
      <ServiceCard
        icon={<AiFillLike size={30} />}
        title="Bảo đảm chất lượng"
        subtitle="Sản phẩm đảm bảo chất lượng"
      />
      <ServiceCard
        icon={<HiBanknotes size={30} />}
        title="Tiến hành THANH TOÁN"
        subtitle="Với nhiều PHƯƠNG THỨC"
      />
      <ServiceCard
        icon={<BsCurrencyExchange size={30} />}
        title="Đổi sản phẩm mới"
        subtitle="nếu sản phẩm lỗi"
      />
    </div>
  );
};

export default LogoBanner;
