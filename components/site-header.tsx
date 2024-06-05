import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { NavTop } from "./nav-top";
import { NavMain } from "./nav-main";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import NavSideCollapse from "@/components/nav-side-collapse";
import MenuMembers from "@/components/menu-members";

export function SiteHeader() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background">
      <div className="flex py-6 items-center bg-muted w-full">
        <NavSideCollapse />
        <NavTop />
      </div> 
        <div className="container flex py-6 items-center">
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
