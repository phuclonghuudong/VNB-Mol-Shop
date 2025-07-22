import LOGO_FOOTER from "../../assets/footer.webp";

const Footer = () => {
  return (
    <footer className="h-full bgMain text-white flex items-center justify-center">
      <div className="container mx-auto p-4 text-center">
        <div className="w-full h-full items-center justify-center grid text-white lg:text-md text-sm gap-1">
          <p>Công ty TNHH MOLXIPI SPORTS</p>
          <p>Địa chỉ: xã Long Hựu, tỉnh Tây Ninh</p>
          <p>Email: info@molxipi.com</p>
          <div className="w-full h-full items-center justify-center flex">
            <img src={LOGO_FOOTER} className="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
