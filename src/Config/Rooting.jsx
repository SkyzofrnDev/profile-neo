import About from "../Pages/About";
import Home from "../Pages/Home";

export const routesConfig = [
  {
    path: "/",
    element: <Home />,
    maintenance: false,
  },
  {
    path: "/home",
    element: <Home />,
    maintenance: false, 
  },
  {
    path: "/about",
    element: <About />,
    maintenance: false,
  },
  {
    path: "/test",
    element: <About />,
    maintenance: false,
  },
];
