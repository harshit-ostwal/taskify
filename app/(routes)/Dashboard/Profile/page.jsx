"use client"
import React, { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';
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
import { useUser } from '@/hooks/useUser';
import { Skeleton } from '@/components/ui/skeleton';
import axios from 'axios';
import { toast } from 'sonner';

function page() {

  const { user, loading, refetch } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name || "",
        email: user.email || "",
      });
    }
  }, [user, form]);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.patch(`${process.env.NEXT_PUBLIC_URL}/api/profile`, data);

      if (res) {
        toast.success("Profile Updated Successfully!")
        refetch();
      }

    } catch {
      toast.error(error?.response?.data?.Response || "Error While Updating Profile!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center w-full py-20">
      <div className="flex flex-col w-full h-full max-w-sm gap-10 sm:max-w-xl md:max-w-2xl lg:max-w-4xl">

        <div className="flex flex-col gap-2">
          <h1 className="mb-4 text-2xl font-bold">Profile Information</h1>

          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center w-full gap-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback><Skeleton className="w-24 h-24 rounded-full" /></AvatarFallback>
              </Avatar>
              {loading ? (
                <div className="flex flex-col w-full gap-2">
                  <Skeleton className="h-8 w-96" />
                  <Skeleton className="h-8 w-96" />
                </div>
              ) : (
                <div className="flex flex-col">
                  <h1 className="font-medium">{user.name}</h1>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              )}
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
                    <Input type={"text"} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              render={() => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type={"email"} disabled placeholder={user.email} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading || loading}>
              {isLoading || loading ? <Loader className="animate-spin" /> : "Update"}
            </Button>
          </form>
        </Form>

      </div >
    </div >
  )
}

export default page