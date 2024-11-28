import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import DetailsCoffee from "../pages/DetailsCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import Root from "../Root";
import ErrorPage from "./../ErrorPage";
import AddNewCoffee from "./../pages/AddNewCoffee ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/coffee",
        element: <AddNewCoffee />,
      },
      {
        path: "/coffee/:id",
        element: <UpdateCoffee />,
      },
      {
        path: "/details/:id",
        element: <DetailsCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params?.id}`),
      },
    ],
  },
]);

export default router;
