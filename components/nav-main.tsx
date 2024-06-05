"use client";
import Image from "next/image"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { navItems } from "@/data/home";

export function NavMain() {
  const pathname = usePathname();
  const { theme } = useTheme();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-4">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image
      src={theme === "light" ? "/img/logo/casa-dourada-light.png" : "/img/logo/casa-dourada-dark.png"}
      alt={"Casa Dourada"}
          width={125}
          height={47}
          priority
          // hack
          style={{height:  47, width:'auto'}}
        />
        <span className="sr-only">{siteConfig.name}</span>
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
