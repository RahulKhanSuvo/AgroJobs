import CandidateLayout from "@/layouts/CandidateLayout";
import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import Error from "@/pages/Error";
import Home from "@/pages/Home/Home";
import { createBrowserRouter, Navigate } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import AuthLayout from "@/layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={"login"} replace />,
          },
          {
            path: "login",
            element: <Login />,
          },
          { path: "sign-up", element: <SignUp /> },
        ],
      },
    ],
  },
  // candidate layout
  {
    path: "/candidate",
    element: (
      <ProtectedRoute allowRole={["USER"]}>
        <CandidateLayout />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
]);
export default router;
