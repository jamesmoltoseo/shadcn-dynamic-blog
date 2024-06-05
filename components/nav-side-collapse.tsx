"use client";

import { Icons } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navTopItems } from "@/data/home";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

export default function NavSideCollapse() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 xl:hidden text-white"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Alternar menu de navegação</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="dark text-white">
        <nav className="grid gap-6 text-lg font-medium">
          <Sheet>
            {navTopItems.map((item, index) => (
              <Link
                key={index}
                href={`/${item}`}
                className={cn(
                  "whitespace-nowrap text-sm font-medium transition-colors hover:text-primary hidden xl:inline-block",
                  pathname === `/${item}`
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item}
              </Link>
            ))}
          </Sheet>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
