"use client"
import { Bell, CheckCheck, Github, Linkedin, LogOut, Mail, PhoneCall, Settings, User2 } from 'lucide-react'
import React from 'react'
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
import { useSessionAuth } from '@/hooks/useUserAuth'
import { Skeleton } from './ui/skeleton'
import { useUser } from '@/hooks/useUser'

function Navbar() {

    const { handleSignOut } = useSessionAuth();
    const { user, loading } = useUser();

    return (
        <div className="flex items-center justify-around w-full p-5">
            <Link href="/Dashboard" className="flex items-center justify-center gap-2">
                <span className="p-3 rounded-full bg-primary dark:bg-primary text-background dark:text-primary-foreground"><CheckCheck className="w-8 h-8" /></span>
                <h1 className="text-2xl font-bold">Taskify</h1>
            </Link>
            <div className="flex items-center justify-center gap-4 w-fit">
                <button>New Task</button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="items-center justify-start w-56 p-2">
                            <Avatar>
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback><Skeleton className="w-10 h-10 rounded-full" /></AvatarFallback>
                            </Avatar>
                            <h1 className="w-full text-left truncate max-w-40 text-ellipsis">{loading ? <Skeleton className="w-full h-8 max-w-40" /> : user.name}</h1>
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
                                <User2 className="w-8 h-8" />
                                <h1 className="w-full duration-300 group-hover:pl-1.5">Profile</h1>
                                <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={"/Dashboard/Profile/Notifications"} className="flex items-center w-full gap-3 group">
                                <Bell className="w-8 h-8" />
                                <h1 className="w-full duration-300 group-hover:pl-1.5">Notfications</h1>
                                <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={"/Dashboard/Profile/Settings"} className="flex items-center w-full gap-3 group">
                                <Settings className="w-8 h-8" />
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
                                <PhoneCall className="w-8 h-8" />
                                <h1 className="w-full duration-300 group-hover:pl-1.5">Contact Us</h1>
                                <DropdownMenuShortcut>⇧⌘C</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={"https://github.com/harshit-ostwal"} target="_blank" className="flex items-center w-full gap-3 group">
                                <Github className="w-8 h-8" />
                                <h1 className="w-full duration-300 group-hover:pl-1.5">Github</h1>
                                <DropdownMenuShortcut>⇧⌘G</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={"https://www.linkedin.com/in/harshitostwal"} target="_blank" className="flex items-center w-full gap-3 group">
                                <Linkedin className="w-8 h-8" />
                                <h1 className="w-full duration-300 group-hover:pl-1.5">Linkedin</h1>
                                <DropdownMenuShortcut>⇧⌘L</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href={"mailto:harshitostwal1234@gmail.com"} target="_blank" className="flex items-center w-full gap-3 group">
                                <Mail className="w-8 h-8" />
                                <h1 className="w-full duration-300 group-hover:pl-1.5">Mail</h1>
                                <DropdownMenuShortcut>⇧⌘M</DropdownMenuShortcut>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex items-center gap-3 cursor-pointer group" onSelect={handleSignOut}>
                            <LogOut className="w-8 h-8" />
                            <h1 className="w-full duration-300 group-hover:pl-1.5">Logout</h1>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar