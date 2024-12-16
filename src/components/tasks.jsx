"use client"
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Calendar1 } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { Badge } from './ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { toast } from 'sonner';

function Tasks() {

    const taskData = [
        {
            title: "Design and finalize an asdsada",
            description:
                "Develop a highly detailed and structured plan that outlines every step required for a successful project launch. This should include key milestones, potential risks, resource allocation, and stakeholder involvement.",
            status: "NOT_YET_STARTED",
            priority: "LOW",
            dueDate: "16 December 2024",
        },
        {
            title: "Design and finalize an asdsada",
            link: "https://example.com/design-homepage",
            status: "IN_PROGRESS",
            priority: "MEDIUM",
        },
        {
            title: "Identify and resolve critical bugs affecting the user registration process",
            description:
                "Analyze error logs and user feedback to pinpoint the underlying issues in the user registration process. Implement fixes, test thoroughly, and ensure a seamless experience for all users.",
            status: "COMPLETED",
            priority: "HIGH",
        },
        {
            title: "Prepare and present the detailed weekly status report for the project",
            description:
                "Compile an exhaustive status report that highlights progress, setbacks, and upcoming goals for the week. Include actionable insights and ensure it is ready for presentation to stakeholders.",
            link: "https://example.com/status-report",
            status: "NOT_YET_STARTED",
            priority: "LOW",
            dueDate: "16 December 2024",
        },
        {
            title: "Revise and update the existing database schema to align with new project requirements",
            status: "IN_PROGRESS",
            priority: "URGENT",
        },
    ];

    const priorityColors = {
        LOW: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
        MEDIUM: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
        HIGH: "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20",
        URGENT: "bg-red-500/10 text-red-500 hover:bg-red-500/20",
    };

    const statusColors = {
        NOT_YET_STARTED: "bg-slate-500/10 text-slate-500",
        IN_PROGRESS: "bg-blue-500/10 text-blue-500",
        COMPLETED: "bg-green-500/10 text-green-500",
    };

    const handleShare = (link) => {
        navigator.clipboard.writeText(link).then(() => {
            toast.info("The Link Is Copied To The Clipboard");
        }).catch(() => {
            toast.error("Failed To Copy Link");
        })
    }

    return (
        <div className="flex flex-col gap-6">
            {taskData.map((data, index) => (
                <div key={index} className="w-full flex flex-col gap-8 items-start border rounded-md p-8">
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2 items-center">
                            <Badge variant="secondary" className={priorityColors[data.priority]}>
                                {data.priority}
                            </Badge>
                            <Badge variant="secondary" className={statusColors[data.status]}>
                                {data.status}
                            </Badge>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button><Icons.more className="w-5 h-5" /></button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    <p>Manage</p>
                                </DropdownMenuLabel>
                                <DropdownMenuItem asChild>
                                    <Link href={"/Dashboard"} className="flex items-center w-full gap-3 group">
                                        <Icons.edit className="w-8 h-8" />
                                        <h1 className="w-full duration-300 group-hover:pl-1.5">Edit Task</h1>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href={"/Dashboard"} className="flex items-center w-full gap-3 group">
                                        <Icons.copy className="w-8 h-8" />
                                        <h1 className="w-full duration-300 group-hover:pl-1.5">Duplicate</h1>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href={"/Dashboard"} className="flex text-destructive items-center w-full gap-3 group">
                                        <Icons.delete className="w-8 h-8" />
                                        <h1 className="w-full duration-300 group-hover:pl-1.5">Delete</h1>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild onClick={() => handleShare(data.link)}>
                                    <Link href={"/Dashboard"} className="flex items-center w-full gap-3 group">
                                        <Icons.share className="w-8 h-8" />
                                        <h1 className="w-full duration-300 group-hover:pl-1.5">Share</h1>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-xl line-clamp-2">{data.title}</h1>
                        {data.description &&
                            <p className="text-lg text-muted-foreground line-clamp-4">{data.description}</p>
                        }
                        {data.dueDate &&
                            <div className="flex gap-3 mt-2 text-popover-foreground">
                                <Calendar1 className="w-5 h-5" />
                                <p>{data.dueDate}</p>
                            </div>
                        }
                        {data.link &&
                            <Link className="mt-2 w-fit flex gap-3" href={data.link}>
                                <Icons.link className="w-5 h-5" />
                                <Button variant="link" className="p-0">Visit Site</Button>
                            </Link>
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Tasks