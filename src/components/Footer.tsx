"use client";
export default function Footer() {
  return (
    <footer className="w-full px-4 py-5 bg-black border-t border-[#aaa] mt-10 flex justify-between text-[#aaa] text-sm">
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
        <a
          href="#"
          style={{ color: "#aaa", textDecoration: "none", transition: "0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
        >
          Terms
        </a>

        <a
          href="#"
          style={{ color: "#aaa", textDecoration: "none", transition: "0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
        >
          Privacy
        </a>

        <a
          href="#"
          style={{ color: "#aaa", textDecoration: "none", transition: "0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
