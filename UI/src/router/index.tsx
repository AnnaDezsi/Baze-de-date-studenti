import { NonAuthenticatedLayout } from "@/components/custom";
import { Login, Register } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NonAuthenticatedLayout>
        <Login />
      </NonAuthenticatedLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <NonAuthenticatedLayout>
        <Register />
      </NonAuthenticatedLayout>
    ),
  },
]);

export default router;
