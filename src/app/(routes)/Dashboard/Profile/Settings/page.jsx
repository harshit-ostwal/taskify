"use client"
import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import ThemeToggleBtn from '@/components/common/theme-toggle-btn';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Icons } from '@/components/icons';

function page() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex items-center justify-center w-full py-20">
      <div className="flex flex-col h-full gap-20 w-11/12 lg:max-w-4xl">

        <div className="flex flex-col gap-2">
          <h1 className="mb-4 text-2xl font-bold">General Settings</h1>

          <div className="flex flex-col items-end sm:items-center sm:flex-row justify-between gap-4 py-4">
            <div className="flex items-center gap-4 w-full">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Icons.sunMoon className="w-5 h-5 text-purple-600 transition-all" />
              </div>
              <div>
                <h1 className="font-medium">Theme</h1>
                <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
              </div>
            </div>
            <ThemeToggleBtn />
          </div>

          <Separator />

          <div className="flex flex-col items-end sm:items-center sm:flex-row justify-between gap-4 py-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Icons.eraser className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h1 className="font-medium">Delete Tasks</h1>
                <p className="text-sm text-muted-foreground">Permanently remove all tasks from your account</p>
              </div>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" disabled={isLoading} className="min-w-20">
                  {isLoading ? <Icons.loader className="animate-spin" /> : "Delete Tasks"}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure you want to delete your tasks?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. It will permanently remove all tasks from your account and delete your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Delete Tasks</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <Separator />

          <div className="flex flex-col items-end sm:items-center sm:flex-row justify-between gap-4 py-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <Icons.userX className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h1 className="font-medium">Delete My Account</h1>
                <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data</p>
              </div>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" disabled={isLoading} className="min-w-40">
                  {isLoading ? <Icons.loader className="animate-spin" /> : "Delete My Account"}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure you want to delete your account?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. It will permanently delete your account and erase all your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Delete Account</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

      </div >
    </div >
  )
}

export default page