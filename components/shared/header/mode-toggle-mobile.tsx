"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ModeToggleMobile() {
  const [mounted, setMounted] = useState(false);

  const { setTheme, theme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex gap-2 justify-between mx-6">
      <Button
        variant={theme === "light" ? "default" : "outline"}
        size="icon"
        onClick={() => setTheme("light")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Light theme</span>
      </Button>

      <Button
        variant={theme === "dark" ? "default" : "outline"}
        size="icon"
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Dark theme</span>
      </Button>

      <Button
        variant={theme === "system" ? "default" : "outline"}
        size="icon"
        onClick={() => setTheme("system")}
      >
        <Monitor className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">System theme</span>
      </Button>
    </div>
  );
}
