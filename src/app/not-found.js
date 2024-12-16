"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/Dashboard");
  }, [router]);
  return null;
}

export default NotFound;