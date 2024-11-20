import React from 'react';
import { Bell, Mail, MessageSquare } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

function page() {
  return (
    <div className="flex items-center justify-center w-full py-20">
      <div className="flex flex-col w-full h-full max-w-sm gap-20 sm:max-w-xl md:max-w-2xl lg:max-w-4xl">

        <div className="flex flex-col gap-2">
          <h1 className="mb-4 text-2xl font-bold">Notification Preferences</h1>

          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h1 className="font-medium">Email Notifications</h1>
                <p className="text-sm text-muted-foreground">Receive emails about your account activity</p>
              </div>
            </div>
            <Switch />
          </div>

          <Separator />

          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Bell className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h1 className="font-medium">Push Notifications</h1>
                <p className="text-sm text-muted-foreground">Receive push notifications on your device</p>
              </div>
            </div>
            <Switch />
          </div>

          <Separator />

          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <MessageSquare className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h1 className="font-medium">Message Notifications</h1>
                <p className="text-sm text-muted-foreground">Receive notifications for new messages</p>
              </div>
            </div>
            <Switch />
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