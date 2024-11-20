"use client"
import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { userSchema } from '@/schema/user-schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUser } from '@/hooks/useUserSession';

function page() {

  const { session } = useUser();

  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: session?.user?.name || "",
      email: session?.user?.email || "",
    },
  })

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center w-full py-20">
      <div className="flex flex-col w-full h-full max-w-sm gap-10 sm:max-w-xl md:max-w-2xl lg:max-w-4xl">

        <div className="flex flex-col gap-2">
          <h1 className="mb-4 text-2xl font-bold">Profile Information</h1>

          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={session?.user?.image} alt={session?.user?.name} />
                <AvatarFallback>{session?.user?.name ? session.user.name[0] + session.user.name[1] : 'HJ'}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-medium">{session?.user?.name}</h1>
                <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
              </div>
            </div>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Harshit Jain" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="harshitostwal1234@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Update</Button>
          </form>
        </Form>

      </div >
    </div >
  )
}

export default page