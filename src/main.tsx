import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/AppRouter.tsx";
import ReduxProvider from "./providers/ReduxProvider.tsx";
import { Toaster } from "sonner";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { SidebarProvider } from "./components/ui/sidebar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <ThemeProvider>
        <SidebarProvider>
          <TooltipProvider>
            <RouterProvider router={router} />
            <Toaster />
          </TooltipProvider>
        </SidebarProvider>
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>,
);
