import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Nav from "./Components/Nav";
import ResMenu from "./Components/ResMenu";
import Cart from "./Components/Cart";

// Providing Store to Our App
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="bg">
        <Nav />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
