"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { toast } from "sonner";

export function useThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);

    const messages = {
      light: "☀️ Let There Be Light!",
      dark: "🌌 Embrace The Night!",
      system: "🌎 Light & Dark: Perfectly Balanced!",
    };

    toast.success(messages[newTheme]);
  };

  return { theme, toggleTheme, mounted };
}