"use client";
import Image from "next/image"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { navItems } from "@/data/home";

export function NavTop() {
  const pathname = usePathname();
  const { theme } = useTheme();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-4">
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
