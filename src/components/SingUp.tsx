"use client";
import { useTheme } from "next-themes";
import { ErxesLogo } from "./ErxesLogo";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import Link from "next/link";
const SingUp = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center flex-col items-center">
        <ErxesLogo
          className="text-foreground size-52"
          fill={theme === "light" ? "black" : "white"}
        />
        <p className="text-foreground text-4xl font-bold">
          Sign up to your account
        </p>
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

        <Link href={"/"} className="w-full">
          <Button className="w-full">Sign Up</Button>
        </Link>
        <Link href={"/sign-in"} className="w-full">
          <Button variant="outline" className="w-full">
            Sign In
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default SingUp;
