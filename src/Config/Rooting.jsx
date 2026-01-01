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
    maintenance: true, 
  },
  {
    path: "/about",
    element: <About />,
    maintenance: true,
  },
  {
    path: "/test",
    element: <About />,
    maintenance: true,
  },
];
