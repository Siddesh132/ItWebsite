'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
const Navabar = ({ className }: { className?: string }) => {

  const [active, setActive] = useState<string | null>(null);
  return (
     <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/Courses">All course</HoveredLink>
        <HoveredLink href="/Courses">Basic Music Theory</HoveredLink>
        <HoveredLink href="/Courses">Advanced composation</HoveredLink>
        <HoveredLink href="/Courses">Song Writing</HoveredLink>
        <HoveredLink href="/Courses">Music Production</HoveredLink>
        </div>
        </MenuItem>
        <Link href={"/Resourcehub"}>
        <MenuItem setActive={setActive} active={active} item="Resource Hub">
        </MenuItem>
        </Link>

      </Menu>
    </div>
  )
}  

export default Navabar