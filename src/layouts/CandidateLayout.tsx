import { CandidateSidebar } from "@/components/layouts/CandidateSidebar";
import { Outlet } from "react-router";

export default function CandidateLayout() {
  return (
    <div>
      <CandidateSidebar />
      <Outlet />
    </div>
  );
}
