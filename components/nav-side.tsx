"use client";

import { Icons } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navTopItems } from "@/data/home";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

export default function NavSide() {
  const pathname = usePathname();

  return (
    <nav className="grid gap-6 text-lg font-medium">
      {navTopItems.map((item, index) => (
        <Link
          key={index}
          href={`/${item}`}
          className={cn(
            "whitespace-nowrap text-sm font-medium transition-colors hover:text-primary hidden xl:inline-block",
            pathname === `/${item}` ? "text-foreground" : "text-foreground/60"
          )}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}
