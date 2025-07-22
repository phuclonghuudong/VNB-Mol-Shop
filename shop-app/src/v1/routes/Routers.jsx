import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";

const Routers = () => {
  const isLoggedIn = false;
  return 1 > 2 ? <AuthRouter /> : <MainRouter />;
};

export default Routers;
