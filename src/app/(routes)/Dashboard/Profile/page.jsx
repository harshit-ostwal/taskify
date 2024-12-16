// "use client"
// import React, { useState } from 'react';
// import { Loader } from 'lucide-react';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Skeleton } from '@/components/ui/skeleton';
// import { useForm } from 'react-hook-form';
// import { useSession } from 'next-auth/react';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { ProfileSchema } from '@/schema/profile-schema';

// function page() {

//   const [isLoading, setIsLoading] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const { data: session } = useSession();

//   const form = useForm({
//     resolver: zodResolver(ProfileSchema),
//     defaultValues: {
//       name: session?.user?.name || "",
//       email: session?.user?.email || "",
//     },
//   });

//   const onSubmit = async (e) => {
//     console.dir(e, { depth: null });
//   }

//   return (
//     <div className="flex items-center justify-center w-full py-20">
//       <div className="flex flex-col w-11/12 h-full gap-10 lg:max-w-4xl">

//         <div className="flex flex-col gap-2">
//           <h1 className="mb-4 text-2xl font-bold">Profile Information</h1>

//           <div className="flex items-center justify-between gap-4 py-4">
//             <div className="flex items-center w-full gap-4">
//               <Avatar className="w-24 h-24">
//                 <AvatarImage src={session?.user?.image} alt={session?.user?.name} />
//                 <AvatarFallback><Skeleton className="w-24 h-24 rounded-full" /></AvatarFallback>
//               </Avatar>
//               {loading ? (
//                 <div className="flex flex-col w-full gap-2">
//                   <Skeleton className="h-8 w-96" />
//                   <Skeleton className="h-8 w-96" />
//                 </div>
//               ) : (
//                 <div className="flex flex-col">
//                   <h1 className="font-medium">{session?.user?.name}</h1>
//                   <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Name</FormLabel>
//                   <FormControl>
//                     <Input type="text" {...field} className="w-full" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               name="email"
//               render={() => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input type={"email"} placeholder={session?.user?.email} disabled className="w-full" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit" disabled={isLoading || loading}>
//               {isLoading || loading ? <Loader className="animate-spin" /> : "Update"}
//             </Button>
//           </form>
//         </Form>

//       </div >
//     </div >
//   )
// }

// export default page

import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page