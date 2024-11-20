"use client";
import React from "react";
import { Moon, Sun, Tv2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useThemeToggle } from "@/hooks/useThemeToggle";

export default function ThemeToggleBtn() {
  const { theme, toggleTheme, mounted } = useThemeToggle();

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => toggleTheme("light")}
        disabled={theme === "light"}
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={() => toggleTheme("dark")}
        disabled={theme === "dark"}
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={() => toggleTheme("system")}
        disabled={theme === "system"}
      >
        <Tv2 className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </div>
  );
}