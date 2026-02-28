import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router";
import { Button } from "../ui/button";
import {
  Bookmark,
  Building,
  ChartBar,
  Eye,
  FileCheck,
  History,
  Settings,
  User,
} from "lucide-react";
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "",
          icon: <ChartBar />,
        },
        {
          title: "Profile",
          url: "profile",
          icon: <User />,
        },
        {
          title: "Applied Job",
          url: "applied-job",
          icon: <FileCheck />,
        },
        {
          title: "Save Job",
          url: "save-job",
          icon: <Bookmark />,
        },
        {
          title: "Profile Views",
          url: "profile-views",
          icon: <Eye />,
        },
        {
          title: "Follow Company",
          url: "followed-companies",
          icon: <Building />,
        },
        {
          title: "Job View History",
          url: "recent-jobs",
          icon: <History />,
        },
        {
          title: "Setting",
          url: "setting",
          icon: <Settings />,
        },
      ],
    },
    // {
    //   title: "Build Your Application",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Routing",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
};

export function CandidateSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url}>
                        {item.icon}
                        <span>{item.title}</span>{" "}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <SidebarMenuItem className="p-2">
          <SidebarMenuButton>
            <Button className="w-fit ">Logout</Button>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
