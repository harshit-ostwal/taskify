import React from 'react';
import { Eraser, Globe, SunMoonIcon, UserX2 } from 'lucide-react';
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

function page() {

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
                <Button variant="destructive">Delete Tasks</Button>
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
                <Button variant="destructive">Delete My Account</Button>
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

        {/* Recent Notifications */}
        {/* <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Recent Notifications</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                title: 'New login detected',
                description: 'A new login was detected from Chrome on Windows',
                time: '2 hours ago',
                type: 'security'
              },
              {
                title: 'Profile updated',
                description: 'Your profile information was successfully updated',
                time: '1 day ago',
                type: 'account'
              },
              {
                title: 'Password changed',
                description: 'Your account password was changed successfully',
                time: '3 days ago',
                type: 'security'
              }
            ].map((notification, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                <div className={`p-2 rounded-lg ${notification.type === 'security' ? 'bg-red-100' : 'bg-blue-100'
                  }`}>
                  <Bell className={`w-5 h-5 ${notification.type === 'security' ? 'text-red-600' : 'text-blue-600'
                    }`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{notification.title}</h3>
                  <p className="text-sm text-gray-500">{notification.description}</p>
                  <span className="text-xs text-gray-400">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>*/}
      </div >
    </div >
  )
}

export default page