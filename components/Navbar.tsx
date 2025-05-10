import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <>
      <nav className="w-screen px-4 py-3 border-b bg-white shadow-sm flex justify-between items-center">
        <div className="px-4">
          <h1 className="text-2xl font-bold">
            <span className="text-slate-600">Glyph</span>
            <span className="text-indigo-500">Note</span>
          </h1>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <Link href="/login" passHref>
              <NavigationMenuLink className={"w-full" + navigationMenuTriggerStyle()}>
                <Button className="text-black hover:bg-neutral-100" variant={"outline"}>
                  Login
                </Button>
              </NavigationMenuLink>
            </Link>
            <Link href={"/register"} passHref>
              <NavigationMenuLink className={"w-full" + navigationMenuTriggerStyle()}>
                <Button className="hover:bg-neutral-900">Sign Up</Button>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}
