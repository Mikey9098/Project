"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full flex items-center  place-content-between py-3 px-5 bg-[black] border-b border-[#222]">
      <div>
        <Link href={"/"}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src="https://office.erxes.io/gateway/pl:core/read-file?key=0.2424155068893934erxesTransparentlogo.png"
              style={{ height: "32px" }}
            />
          </div>
        </Link>
      </div>
      <div className="ml-50 hidden md:block">
        <Link href={"/"}>
          <span style={{ color: "white", fontSize: "18px", fontWeight: 600 }}>
            Erxes TV
          </span>
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="hidden md:flex">
        <input
          placeholder="Search"
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "1px solid #444",
            background: "#111",
            color: "white",
            outline: "none",
          }}
          className="hidden md:block"
        />

        <Link href={"/sign-in"} className="hidden md:block">
          <button
            style={{
              padding: "6px 14px",
              borderRadius: "6px",
              background: "#2a62ff",
              color: "white",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </Link>
        <MobileHeader></MobileHeader>
      </div>
    </header>
  );
}

const MobileHeader = () => {
  return (
    <Button className="md:hidden" >
      <Menu></Menu>
    </Button>
  );
};
