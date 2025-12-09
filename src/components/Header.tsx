"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-3 px-5 bg-[black] border-b border-[#222]">
      <Link href={"/"}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://office.erxes.io/gateway/pl:core/read-file?key=0.2424155068893934erxesTransparentlogo.png"
            style={{ height: "32px" }}
          />
          <span style={{ color: "white", fontSize: "18px", fontWeight: 600 }}>
            Erxes TV
          </span>
        </div>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
        />

        <Link href={"/sign-in"}>
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
      </div>
    </header>
  );
}
