"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ShoppingCart, UserIcon, Menu as MenuIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { ModeToggleMobile } from "./mode-toggle-mobile";

export const Menu = () => {
  return (
    <>
      {/* Menu Desktop */}
      <nav className="hidden lg:flex space-x-2">
        <ModeToggle />
        <Button variant="ghost" asChild>
          <Link href="/cart" aria-label="Cart">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in" aria-label="Sign In">
            <UserIcon className="mr-2 h-4 w-4" />
            Sign In
          </Link>
        </Button>
      </nav>

      {/* Menu Mobile */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open Menu">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-4 space-y-4">
            <SheetTitle className="sr-only">menu</SheetTitle>
            <div className="flex flex-col space-y-4 mt-10">
              <Button variant="ghost" asChild>
                <Link href="/cart" aria-label="Cart">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart
                </Link>
              </Button>
              <Button asChild>
                <Link href="/sign-in" aria-label="Sign In">
                  <UserIcon className="mr-2 h-4 w-4" />
                  Sign In
                </Link>
              </Button>
              <ModeToggleMobile />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
