import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import ReduxExample from "./components/ReduxExample/ReduxExample";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Gallery",
        element: <Gallery />,
      },
      {
        path: "Redux",
        element: <ReduxExample />,
      },
    ],
  },
];

export default routes;
