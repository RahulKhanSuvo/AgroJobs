import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/AppRouter.tsx";
import ReduxProvider from "./providers/ReduxProvider.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ReduxProvider>
  </StrictMode>,
);
