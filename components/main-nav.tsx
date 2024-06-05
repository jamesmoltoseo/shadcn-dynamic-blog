"use client";

import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/home";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-4">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      {navItems.map((item, index) => (
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
