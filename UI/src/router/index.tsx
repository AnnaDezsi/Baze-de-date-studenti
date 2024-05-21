import { NonAuthenticatedLayout, ProtectedRoutes } from "@/components/custom";
import { Dashboard, Login, Register } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const unprotectedRoutes = [
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
]

const protectedRoutes = [
  {
    element: <ProtectedRoutes/>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />

      }
    ]
  },
  
]

const router = createBrowserRouter([
  ...unprotectedRoutes,
  ...protectedRoutes
]);





export default router;
