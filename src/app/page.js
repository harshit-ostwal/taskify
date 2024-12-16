"use client"
import React from 'react'
import { Button } from '@/components/ui/button';
import ThemeToggleBtn from '@/components/common/theme-toggle-btn';
import { Icons } from '@/components/icons';

function page() {
  const handleSignIn = async (provider) => {
    // await signIn(provider, { redirectTo: '/Dashboard', redirect: true });
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen gap-6">
      <div className="flex flex-col items-center justify-center w-full max-w-xs gap-10 md:max-w-sm">
        <div className="flex flex-col items-center justify-center gap-10">
          <span className="p-3 rounded-full bg-primary dark:bg-primary text-background dark:text-primary-foreground"><Icons.check className="w-10 h-10" /></span>
          <p className="md:text-lg text-muted-foreground"><span className="font-bold text-foreground">Taskify</span> is one of my side <u className="text-foreground">projects</u>. It’s the simplest and most efficient way to manage your daily tasks or keep track of your progress on ongoing projects. You can try it out by logging in.</p>
        </div>
        <div className="flex flex-col w-full gap-2">
          <Button onClick={() => handleSignIn('github')} variant={"primary"}>
            <Icons.github className="w-6 h-6" />
            <p>Sign In with GitHub</p>
          </Button>
          <Button onClick={() => handleSignIn('google')} variant={"outline"}>
            <Icons.github className="w-6 h-6" />
            <p>Sign In with Google</p>
          </Button>
        </div>
        <ThemeToggleBtn />
      </div>
    </div>
  );
}

export default page;