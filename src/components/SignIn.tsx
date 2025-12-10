"use client";
import { ErxesLogo } from "./ErxesLogo";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="w-full h-screen flex justify-center flex-col bg-[#222] text-white items-center">
      <div className="flex justify-center flex-col items-center pt-5 pb-20">
        <img
          src="https://office.erxes.io/gateway/pl:core/read-file?key=0.2424155068893934erxesTransparentlogo.png"
          className="w-60"
        />
      </div>

      <Card className="w-100 bg-neutral-900 border border-neutral-800 text-white px-5 ">
        <div>
          <label htmlFor="email">Email</label>
          <Input
            className="bg-neutral-900 border-neutral-700 focus:border-white"
            placeholder="Erxes@example.com"
          ></Input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            className="bg-neutral-900 border-neutral-700 focus:border-white"
            type="password"
          />
        </div>
        <div className="flex justify-between">
          <div className="">
            <Checkbox
              className="mr-2 cursor-pointer border-neutral-700 data-[state=checked]:bg-white data-[state=checked]:text-black"
              id="terms"
            />
            <label htmlFor="terms">Remember me!</label>
          </div>
        </div>

        <Link href={"/"} className="w-full">
          <Button className="w-full cursor-pointer bg-white text-black hover:bg-gray-200">
            Sign In
          </Button>
        </Link>
      </Card>

      <div className="mt-4 text-white flex gap-3">
        <p className="text-gray-400">Does not have an account?</p>
        <Link
          href={"/sign-up"}
          className="text-white hover:text-gray-300 font-bold"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
