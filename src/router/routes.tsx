import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import CreateTopic from "../pages/CreateTopic";
import EditTopic from "../pages/EditTopic";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/createTopic",
        element: <CreateTopic />,
      },
      {
        path: "/editTopic/:id",
        element: <EditTopic />,
      },
    ],
  },
]);
