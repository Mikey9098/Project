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

const SignIn = () => {
  const { theme } = useTheme();
  return (
    <div className="bg-background w-full h-screen flex justify-center flex-col items-center">
      <div></div>
      <div className="flex justify-center flex-col items-center pt-5 pb-20">
        <ErxesLogo
          className="text-foreground size-52"
          fill={theme === "light" ? "black" : "white"}
        />
        <p className="text-foreground text-4xl ">Sign in to your account</p>
      </div>
      <Card className="w-100 px-5">
        <div>
          <label htmlFor="email">Email</label>
          <Input placeholder="Erxes@example.com"></Input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input></Input>
        </div>
        <div className="flex justify-between">
          <div className="">
            <Checkbox className=" cursor-pointer"></Checkbox>
            <label htmlFor="terms">Remember me!</label>
          </div>

          <div>
            <a href="#" className=" font-semibold">
              Forgot password?
            </a>
          </div>
        </div>
        <Button className=" cursor-pointer">Sign In</Button>
        <Button variant="outline" className=" cursor-pointer">
          Sign up
        </Button>
      </Card>
    </div>
  );
};

export default SignIn;
