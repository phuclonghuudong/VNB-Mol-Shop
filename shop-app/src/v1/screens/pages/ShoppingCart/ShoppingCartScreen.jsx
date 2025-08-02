import { useState } from "react";
import IMG_NONE_CART from "../../../assets/empty-cart.webp";
import TitleHeaderPage from "../../../components/ui/TitleHeaderPage";
import TitlePage from "../../../components/ui/TittlePage";

const ShoppingCartScreen = () => {
  const [isCart, setIsCart] = useState([]);
  return (
    <section className="mx-auto">
      <TitleHeaderPage title="Giỏ hàng" />

      <div className="lg:px-12 lg:pb-8 px-4 flex flex-col gap-3 py-4">
        <TitlePage title={"Giỏ hàng của bạn"} />

        <div className="text-center items-center p-4 justify-center flex flex-col">
          <img src={IMG_NONE_CART} className="object-scale-down w-60" />
          <p>Không có sản phẩm nào trong giỏ hàng</p>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartScreen;
