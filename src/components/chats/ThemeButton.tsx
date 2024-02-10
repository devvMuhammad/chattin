"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function ThemeButton() {
  // const { theme, setTheme } = useTheme();
  return (
    <div className="flex justify-center">
      {/* <Button onClick={() => setTheme("dark")}>Toggle Mode</Button> */}
      <Button>Toggle Mode</Button>
    </div>
  );
}
