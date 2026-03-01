"use client";

import * as React from "react";
import {
  AudioWaveform,
  Bookmark,
  Building,
  ChartBar,
  Command,
  Eye,
  FileCheck,
  GalleryVerticalEnd,
  History,
  Settings,
  User,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "dashboard",
      icon: ChartBar,
    },
    {
      title: "Profile",
      url: "profile",
      icon: User,
    },
    {
      title: "Applied Job",
      url: "applied-job",
      icon: FileCheck,
    },
    {
      title: "Save Job",
      url: "save-job",
      icon: Bookmark,
    },
    {
      title: "Profile Views",
      url: "profile-views",
      icon: Eye,
    },
    {
      title: "Follow Company",
      url: "followed-companies",
      icon: Building,
    },
    {
      title: "Job View History",
      url: "recent-jobs",
      icon: History,
    },
    {
      title: "Setting",
      url: "setting",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
