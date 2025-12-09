"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import MobileHeader from "./mobileHeader";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const searchMovies = async (text: string) => {
    if (!text.trim()) {
      setResults([]);
      return;
    }

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        text
      )}&api_key=8476a7ab80ad76f0936744df0430e67c&language=en-US`
    );

    const data = await res.json();
    setResults(data.results || []);
  };

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      searchMovies(searchValue);
    }, 350);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchValue]);

  return (
    <header className="w-full flex items-center place-content-between py-3 px-5 bg-[black] border-b border-[#222] relative">
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

      <div className="hidden md:flex items-center gap-3 relative">
        <input
          placeholder="Search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setShowDropdown(true);
          }}
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

        {showDropdown && results.length > 0 && (
          <div className="absolute top-12 left-0 w-60 bg-[#111] border border-[#333] rounded-lg shadow-lg max-h-[300px] overflow-y-auto z-50">
            {results.map((movie: any) => (
              <Link
                key={movie.id}
                href={`/movies/${movie.id}`}
                onClick={() => setShowDropdown(false)}
              >
                <div className="flex items-center gap-3 p-3 hover:bg-[#222] cursor-pointer">
                  <Image
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`
                        : "/fallback.jpg"
                    }
                    alt={movie.title}
                    width={40}
                    height={60}
                    className="rounded object-cover"
                  />

                  <div>
                    <p className="text-white text-sm font-medium">
                      {movie.title}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {movie.release_date?.slice(0, 6) || "N/A"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

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
      </div>
      <MobileHeader />
    </header>
  );
}

// const MobileHeader = () => {
//   return (
//     <Button className="md:hidden ">
//       <Menu />
//     </Button>
//   );
// };
