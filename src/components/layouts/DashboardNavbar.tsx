import { AvatarDropdown } from "../ui/DropdownMenuAvatar";
import { Separator } from "../ui/separator";
import { SidebarInset, SidebarTrigger } from "../ui/sidebar";
import DashboardSearch from "./DashboardSearch";
import { Notifications } from "./Notifications";

export default function DashboardNavbar() {
  const dropdownMenu = [
    {
      title: "Dashboard",
      url: "/candidate",
    },
  ];
  return (
    <div>
      <SidebarInset className="border-b">
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 px-4">
          <div className="flex items-center gap-2 ">
            <SidebarTrigger className="-ml-1" />
          </div>
          <div>
            <DashboardSearch />
          </div>
          <div className="flex gap-2">
            <Notifications />
            <Separator orientation="vertical" />
            <AvatarDropdown menu={dropdownMenu} />
          </div>
        </header>
      </SidebarInset>
    </div>
  );
}
