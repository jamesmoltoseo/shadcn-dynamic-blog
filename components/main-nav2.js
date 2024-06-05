"use client";
import Link from "next/link";
import { navItems } from "@/data/home";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  return (
    // <nav className="flex items-center space-x-4 lg:space-x-6">

    <nav className="hidden flex-col gap-6 text-lg font-medium xl:flex xl:flex-row xl:items-center xl:gap-5 xl:text-sm lg:gap-6">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold md:text-base text-nowrap text-white"
      >
        <Package2 className="h-6 w-6" />
        <span className="sr-only"></span>
      </Link>
      <Link
        href="/blog"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blog
      </Link>
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={`/${item}`}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
            pathname === `/${item}` ? "text-foreground" : "text-foreground/60"
          )}
          // className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground text-nowrap"
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}
