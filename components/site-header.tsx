import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { NavTop } from "./nav-top";
import { NavMain } from "./nav-main";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import NavSide from "@/components/nav-side";
import MenuMembers from "@/components/menu-members";

export function SiteHeader() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex py-6 max-w-screen-2xl items-center">
        <NavSide />
        <NavTop />
      </div>
      <div className="container flex py-6 max-w-screen-2xl items-center">
        <NavMain />

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Icons.twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle />
            <MobileNav />
            <MenuMembers />
          </nav>
        </div>
      </div>
    </header>
  );
}
