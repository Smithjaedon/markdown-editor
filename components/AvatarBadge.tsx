"use client";
import { supabase } from "@/lib/supabaseClient";
import type { User } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

import { ChevronsUpDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AvatarBadge() {
  const [sessionUser, setSessionUser] = useState<User | null>(null);
  const router = useRouter();

  const signOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    if (!error) router.push("/login");
  };

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setSessionUser(session?.user);
      }
    };
    checkUser();
  }, []);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="h-15 w-full flex justify-center" variant="ghost">
            <Avatar className="rounded-md">
              <AvatarImage src="https://i.pravatar.cc/150?img=5" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-cols truncate justify-center space-x-4 w-full">
              <div className="flex items-center text-left h-full truncate justify-between w-full">
                <h2 className="flex flex-1 text-xs">{sessionUser?.email?.split("@")[0]}</h2>
                <div className="flex flex-none items-center justify-center w-8">
                  <ChevronsUpDown />
                </div>
              </div>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={signOut}>
            <Button variant={"ghost"} className="h-5 text-left">
              Log out
            </Button>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
