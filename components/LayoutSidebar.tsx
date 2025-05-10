"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const PAGES = ["/notes"];

export default function LayoutSidebar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showSidebar = PAGES.includes(pathname);
  return (
    <>
      {showSidebar && <AppSidebar />}
      <main>
        {showSidebar && <SidebarTrigger />}
        <div className="flex items-center justify-center">{children}</div>
      </main>
    </>
  );
}
