"use client"
import React, { useState } from 'react'
import ThemeToggleBtn from './common/theme-toggle-btn'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'
import { Icons } from './icons'

function Navbar() {

  const [loading, setLoading] = useState(false);

  return (
    <div className="flex items-center justify-between mx-auto w-11/12 py-5">
      <Link href="/Dashboard" className="flex items-center justify-center gap-2">
        <span className="p-3 rounded-full bg-primary dark:bg-primary text-background dark:text-primary-foreground"><Icons.check className="w-6 h-6" /></span>
        <h1 className="text-xl font-bold">Taskify</h1>
      </Link>
      <div className="flex items-center justify-center gap-4">
        <Link href="/Dashboard/Notifications" className="flex items-center justify-center gap-2">
          <Icons.bellDot className="w-5 h-5" />
        </Link>
        <div className="flex items-center justify-center gap-4 w-fit">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="items-center justify-start lg:w-56 p-2">
                <Avatar>
                  <AvatarImage src={""} alt={""} />
                  <AvatarFallback><Skeleton className="w-10 h-10 rounded-full" /></AvatarFallback>
                </Avatar>
                <h1 className="w-full hidden lg:block text-left truncate max-w-40 text-ellipsis">{loading ? <Skeleton className="w-full h-8 max-w-40" /> : ""}</h1>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="space-y-3">
                <p>Theme</p>
                <ThemeToggleBtn />
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>
                <p>My Account</p>
              </DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href={"/Dashboard/Profile"} className="flex items-center w-full gap-3 group">
                  <Icons.user className="w-8 h-8" />
                  <h1 className="w-full duration-300 group-hover:pl-1.5">Profile</h1>
                  <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={"/Dashboard/Profile/Notifications"} className="flex items-center w-full gap-3 group">
                  <Icons.bell className="w-8 h-8" />
                  <h1 className="w-full duration-300 group-hover:pl-1.5">Notfications</h1>
                  <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={"/Dashboard/Profile/Settings"} className="flex items-center w-full gap-3 group">
                  <Icons.settings className="w-8 h-8" />
                  <h1 className="w-full duration-300 group-hover:pl-1.5">Settings</h1>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>
                <p>Support</p>
              </DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href={"/Contact-Us"} className="flex items-center w-full gap-3 group">
                  <Icons.phone className="w-8 h-8" />
                  <h1 className="w-full duration-300 group-hover:pl-1.5">Contact Us</h1>
                  <DropdownMenuShortcut>⇧⌘C</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={"https://github.com/harshit-ostwal"} target="_blank" className="flex items-center w-full gap-3 group">
                  <Icons.github className="w-8 h-8" />
                  <h1 className="w-full duration-300 group-hover:pl-1.5">Github</h1>
                  <DropdownMenuShortcut>⇧⌘G</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={"https://www.linkedin.com/in/harshitostwal"} target="_blank" className="flex items-center w-full gap-3 group">
                  <Icons.linkedin className="w-8 h-8" />
                  <h1 className="w-full duration-300 group-hover:pl-1.5">Linkedin</h1>
                  <DropdownMenuShortcut>⇧⌘L</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={"mailto:harshitostwal1234@gmail.com"} target="_blank" className="flex items-center w-full gap-3 group">
                  <Icons.mail className="w-8 h-8" />
                  <h1 className="w-full duration-300 group-hover:pl-1.5">Mail</h1>
                  <DropdownMenuShortcut>⇧⌘M</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-3 cursor-pointer group">
                <Icons.logout className="w-8 h-8" />
                <h1 className="w-full duration-300 group-hover:pl-1.5">Logout</h1>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default Navbar