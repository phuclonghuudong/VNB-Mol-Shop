import { Toaster } from "react-hot-toast";

import Routers from "./v1/routes/Routers";

function App() {
  return (
    <>
      <Routers />
      <Toaster />
    </>
  );
}

export default App;
