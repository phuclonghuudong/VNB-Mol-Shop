import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import accountAPI from "./v1/apis/accountApi";
import { localDataNames } from "./v1/configs/appInfo";
import { addAuth, clearAuth } from "./v1/redux/reducers/authReducer";
import Routers from "./v1/routes/Routers";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const res = await accountAPI.refreshToken_User();
        const token = res?.DATA?.TOKEN;
        const user = localStorage.getItem(localDataNames.authData);

        if (token) {
          localStorage.setItem(localDataNames.tokenData, token);
          dispatch(addAuth({ TOKEN: token, USER: JSON.parse(user) }));
        }
      } catch (err) {
        localStorage.removeItem(localDataNames.tokenData);
        dispatch(clearAuth());
      }
    };

    initAuth();
  }, []);
  return (
    <>
      <Routers />
      <Toaster />
    </>
  );
}

export default App;
