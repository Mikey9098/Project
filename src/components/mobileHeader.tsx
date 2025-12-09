"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date?: string;
}

const MobileHeader: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const searchMovies = async (text: string) => {
    if (!text.trim()) {
      setResults([]);
      return;
    }

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          text
        )}&api_key=8476a7ab80ad76f0936744df0430e67c&language=en-US`
      );
      const data = await res.json();
      setResults(data.results || []);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
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
    <div className="md:hidden relative">
      <Button onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>

      {open && (
        <div className="absolute right-0 top-12 w-72 bg-black border border-gray-700 rounded-lg shadow-lg flex flex-col p-3 z-50">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search movies..."
            className="w-full p-2 mb-3 rounded border border-gray-600 bg-gray-900 text-white outline-none"
          />

          {results.length > 0 && (
            <div className="max-h-48 overflow-y-auto mb-3">
              {results.map((movie) => (
                <Link
                  key={movie.id}
                  href={`/movies/${movie.id}`}
                  onClick={() => {
                    setOpen(false);
                    setSearchValue("");
                  }}
                >
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
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
                        {movie.release_date?.slice(0, 4) || "N/A"}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <Link href="/" className="p-2 hover:bg-gray-800 rounded text-white">
            Home
          </Link>
          <Link
            href="/sign-in"
            className="p-2 hover:bg-gray-800 rounded text-white"
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
