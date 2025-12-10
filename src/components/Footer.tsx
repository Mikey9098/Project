"use client";

import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full p-15 bg-black border-t border-[#222] flex justify-between flex-wrap text-[#aaa] text-lg">
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="https://office.erxes.io/gateway/pl:core/read-file?key=0.2424155068893934erxesTransparentlogo.png"
          alt="erxes"
          style={{ height: "24px", opacity: 0.8 }}
        />
        <span>© {new Date().getFullYear()} Erxes TV</span>
      </div>

      {}
      <div style={{ display: "flex", gap: "16px" }}>
        <Link
          href={"/terms"}
          style={{ color: "#aaa", textDecoration: "none", transition: "0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
        >
          Terms
        </Link>

        <Link
          href="/privacy"
          style={{ color: "#aaa", textDecoration: "none", transition: "0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
        >
          Privacy
        </Link>

        <Link
          href="/contact"
          style={{ color: "#aaa", textDecoration: "none", transition: "0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}
