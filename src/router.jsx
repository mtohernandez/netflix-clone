import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, Login, Profile, Welcome } from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/welcome",
    element: <Welcome />,
    children: [
      {
        path: "/welcome/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
