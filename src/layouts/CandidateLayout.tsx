import { CandidateSidebar } from "@/components/layouts/CandidateSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function CandidateLayout() {
  return (
    <SidebarProvider>
      <CandidateSidebar />
      <Outlet />
    </SidebarProvider>
  );
}
