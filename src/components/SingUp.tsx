"use client";
import React from "react";
import { Card, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import ReactCardFlip from "react-card-flip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ErxesLogo } from "./ErxesLogo";
const SingUp = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center flex-col items-center">
        <ErxesLogo
          className="text-foreground size-52"
          fill={theme === "light" ? "black" : "white"}
        />
        <p className="text-foreground text-4xl ">Sign up to your account</p>
      </div>
      <Card className="grid px-5 w-150 mt-20">
        <label htmlFor="Username">Username:</label>
        <Input placeholder="Username"></Input>
        <label htmlFor="password">Password:</label>
        <Input placeholder="password"></Input>
        <label htmlFor="Password">Re-Enter Password:</label>
        <Input placeholder="Re-Enter Password"></Input>
        <label htmlFor="email">Email Address:</label>
        <Input placeholder="Erxes@example.com"></Input>
        <Button>Sign Up</Button>
        <Button variant="outline">Sign In</Button>
      </Card>
    </div>
  );
};

export default SingUp;
