import CandidateSideBar from "@/components/layouts/CandidateSideBar";
import DashboardNavbar from "@/components/layouts/DashboardNavbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, ScrollRestoration } from "react-router";

export default function CandidateLayout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar */}
        <div className="h-screen sticky top-0">
          <CandidateSideBar />
        </div>

        {/* Right Section */}
        <div className="flex flex-1 flex-col h-screen">
          {/* Navbar */}
          <div className="sticky top-0 z-50">
            <DashboardNavbar />
          </div>

          {/* Scrollable content */}
          <main className="flex-1 overflow-y-auto p-4 bg-[#f5f7f9]">
            <ScrollRestoration getKey={(location) => location.pathname} />
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
