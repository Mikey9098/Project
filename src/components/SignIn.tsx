"use client";
import { useTheme } from "next-themes";
import { ErxesLogo } from "./ErxesLogo";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import Link from "next/link";

const SignIn = () => {
  const { theme } = useTheme();
  return (
    <div className="bg-background w-full h-screen flex justify-center flex-col items-center">
      <div></div>
      <div className="flex justify-center flex-col items-center pt-5 pb-20">
        <ErxesLogo className="text-foreground size-52" fill={"black"} />
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

          {/* <div>
            <a href="#" className=" font-semibold">
              Forgot password?
            </a>
          </div> */}
        </div>
        <Link href={"/"} className="w-full">
          <Button className=" cursor-pointer w-full">Sign In</Button>
        </Link>

        <Link href={"/sign-up"} className="w-full">
          <Button variant="outline" className=" cursor-pointer w-full">
            Sign up
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default SignIn;
