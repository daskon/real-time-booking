import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../modules/auth/pages/LoginPage";
import MainLayout from "../components/layout/MainLayout";
import Dashboard from "../modules/dashboard/pages/Dashboard";
import AuthRedirect from "./AuthRedirect";
import ErrorBoundary from "../components/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRedirect />
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <MainLayout>
          <Dashboard/>
        </MainLayout>
      </ProtectedRoute>
    )
  },
  {
    path: "/users",
    element: (
      <ProtectedRoute>
        <MainLayout>
          <ErrorBoundary>
            ""
          </ErrorBoundary>
        </MainLayout>
      </ProtectedRoute>
    )
  }
]);