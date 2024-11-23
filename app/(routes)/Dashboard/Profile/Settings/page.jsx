"use client"
import React, { useState } from 'react';
import { Eraser, Globe, Loader, SunMoonIcon, UserX2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
import axios from 'axios';
import { toast } from 'sonner';
import { useSessionAuth } from '@/hooks/useUserAuth';

function page() {

  const [isLoading, setIsLoading] = useState(false);
  const { handleSignOut } = useSessionAuth();

  const handleDeleteTasks = async () => {
    try {
      setIsLoading(true);
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_URL}/api/profile/tasksDelete`);

      if (res) {
        toast.success("Tasks Deleted Successfully!");
      }

    } catch (error) {
      toast.error(error?.response?.data?.Response || "Error Occurred While Deleting Tasks.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      setIsLoading(true);
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_URL}/api/profile`);

      if (res) {
        toast.success("Account And Associated Data Deleted Successfully.");
        setTimeout(() => {
          handleSignOut();
        }, 1000);
      }

    } catch {
      toast.error(error?.response?.data?.Response || "Error Occurred While Deleting The Account.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full py-20">
      <div className="flex flex-col w-full h-full max-w-sm gap-20 sm:max-w-xl md:max-w-2xl lg:max-w-4xl">

        <div className="flex flex-col gap-2">
          <h1 className="mb-4 text-2xl font-bold">General Settings</h1>

          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Globe className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h1 className="font-medium">Language</h1>
                <p className="text-sm text-muted-foreground">Select your preferred language</p>
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select A Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <SunMoonIcon className="w-5 h-5 text-purple-600 transition-all" />
              </div>
              <div>
                <h1 className="font-medium">Theme</h1>
                <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
              </div>
            </div>
            <ThemeToggleBtn />
          </div>

          <Separator />

          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Eraser className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h1 className="font-medium">Delete Tasks</h1>
                <p className="text-sm text-muted-foreground">Permanently remove all tasks from your account</p>
              </div>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" disabled={isLoading} className="min-w-20">
                  {isLoading ? <Loader className="animate-spin" /> : "Delete Tasks"}
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
                  <AlertDialogAction onClick={handleDeleteTasks}>Delete Tasks</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <Separator />

          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <UserX2 className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h1 className="font-medium">Delete My Account</h1>
                <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data</p>
              </div>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" disabled={isLoading} className="min-w-40">
                  {isLoading ? <Loader className="animate-spin" /> : "Delete My Account"}
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
                  <AlertDialogAction onClick={handleDeleteAccount}>Delete Account</AlertDialogAction>
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