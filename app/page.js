"use client"
import { CheckCheck, Github, Loader } from 'lucide-react'
import { FcGoogle } from "react-icons/fc";
import React from 'react'
import { Button } from '@/components/ui/button';
import ThemeToggleBtn from '@/components/common/theme-toggle-btn';
import { useSessionAuth } from '@/hooks/useUserAuth';

function page() {

  const { handleSignIn, status, loader } = useSessionAuth();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <Loader className="w-10 h-10 text-gray-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen gap-6">
      <div className="flex flex-col items-center justify-center w-full max-w-xs gap-10 md:max-w-sm">
        <div className="flex flex-col items-center justify-center gap-10">
          <span className="p-3 rounded-full bg-primary dark:bg-primary text-background dark:text-primary-foreground"><CheckCheck className="w-10 h-10" /></span>
          <p className="md:text-lg text-muted-foreground"><span className="font-bold text-foreground">Taskify</span> is one of my side <u className="text-foreground">projects</u>. It’s the simplest and most efficient way to manage your daily tasks or keep track of your progress on ongoing projects. You can try it out by logging in.</p>
        </div>
        <div className="flex flex-col w-full gap-2">
          <Button onClick={async () => await handleSignIn("github")} disabled={loader} variant={"primary"}>
            {!loader ? (
              <>
                <Github className="w-6 h-6" />
                <p>Sign In with GitHub</p>
              </>
            ) : (
              <Loader className="w-6 h-6 animate-spin" />
            )}
          </Button>
          <Button onClick={async () => await handleSignIn("google")} disabled={loader} variant={"outline"}>
            {!loader ? (
              <>
                <FcGoogle className="w-6 h-6" />
                <p>Sign In with Google</p>
              </>
            ) : (
              <Loader className="w-6 h-6 animate-spin" />
            )}
          </Button>
        </div>
        <ThemeToggleBtn />
      </div>
    </div>
  )
}

export default page