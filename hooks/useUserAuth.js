"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

export function useSessionAuth() {
  const { data: session, status } = useSession();
  const [loader, setLoader] = useState(false);

  const handleSignOut = async () => {
    try {
      setLoader(true);
      await signOut({ callbackUrl: "/", redirect: true });
    } finally {
      setLoader(false);
    }
  };

  const handleSignIn = async (provider) => {
    try {
      setLoader(true);
      await signIn(provider, { callbackUrl: "/Dashboard", redirect: true });
    } finally {
      setLoader(false);
    }
  };

  return { session, status, setLoader, loader, handleSignIn, handleSignOut };
}