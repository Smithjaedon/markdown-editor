import { Home, Inbox, Search, FilePlus, File } from "lucide-react";
import AvatarBadge from "./AvatarBadge";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";

// Menu items.
const items = [
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
];

const dataUnit = {
  pagesMain: [
    {
      title: "Pages",
      url: "#",
      icon: File,
      isActive: true,
      items: [
        {
          title: "",
        },
      ],
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <Separator />
              <SidebarMenuItem key={"Pages"}>
                <SidebarMenuButton asChild>
                  <a href={"#"}>
                    <File />
                    <span>Pages</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="outline">
          <div className="flex items-center justify-center">
            <FilePlus />
          </div>
          <div className="truncate">Add Note</div>
        </Button>
        <AvatarBadge />
      </SidebarFooter>
    </Sidebar>
  );
}
