"use client"
import CreateTask from '@/components/create-task';
import SearchTask from '@/components/search-task';
import Tasks from '@/components/tasks';
import { Separator } from '@/components/ui/separator';
import React from 'react'

function page() {

  return (
    <div className="flex flex-col mx-auto h-full w-11/12 sm:w-full sm:max-w-xl md:max-w-3xl xl:max-w-6xl py-10 gap-6 items-center">
      <div className="flex gap-2 w-full items-center justify-between">
        <SearchTask />
        <CreateTask />
      </div>
      <Separator />
      <Tasks />
    </div>
  );
}

export default page;