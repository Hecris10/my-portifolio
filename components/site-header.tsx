import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ActionsNav, MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "./mobile-nav"


export function SiteHeader() {

  const navConfig = siteConfig.mainNav

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      {/* md and large screens nav bar */}
      <div className="hidden md:flex lg:flex container h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <ActionsNav/>
      </div>
      {/* mobile nav */}
      <div className="flex md:hidden lg:hidden">
        <MobileNav items={siteConfig.mainNav}/>
      </div>
    </header>
  )
}
