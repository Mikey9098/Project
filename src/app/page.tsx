"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Page = () => {
  const [movies, setMovies] = React.useState<any>(null);
  const [topRated, setImageData] = React.useState<any>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=8476a7ab80ad76f0936744df0430e67c&language=en-US&page=1`
      );

      const imageResponse = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=8476a7ab80ad76f0936744df0430e67c"
      );

      const topRated = await imageResponse.json();
      setImageData(topRated.results);

      const data = await response.json();
      setMovies(data.results);
    };
    fetchData();
  }, []);
  console.log(topRated);

  if (!movies || !topRated) return <div>....loading</div>;
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    const amount = width * 0.8;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className=" bg-primary w-full h-screen">
        <div>
          <div className="w-full bg-primary p-4 relative">
            <h1 className="text-white text-3xl mb-4">Popular Movies</h1>

            <Button
              variant="secondary"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 hover:bg-black/80"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 hover:bg-black/80"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </Button>

            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div
                ref={scrollRef}
                className="flex space-x-4 snap-x snap-mandatory overflow-x-auto p-4 scroll-smooth scrollbar-hide"
              >
                {movies.map((movie: any) => (
                  <Link
                    href={`movies/${movie.id}`}
                    key={movie.id}
                    className="shrink-0 snap-center"
                  >
                    <img
                      className="w-110 h-auto  transition-all duration-200 hover:scale-105"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt="Movie Poster"
                    />
                  </Link>
                ))}
              </div>

              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
        <div>
          <div className="w-full bg-primary p-4 relative">
            <h1 className="text-white text-3xl mb-4">Top Rated</h1>

            <Button
              variant="secondary"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 hover:bg-black/80"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 hover:bg-black/80"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </Button>

            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div
                ref={scrollRef}
                className="flex space-x-4 snap-x snap-mandatory overflow-x-auto p-4 scroll-smooth scrollbar-hide"
              >
                {topRated.map((movie: any) => (
                  <Link
                    href={`movies/${movie.id}`}
                    key={movie.id}
                    className="shrink-0 snap-center"
                  >
                    <img
                      className="w-110 h-auto  transition-all duration-200 hover:scale-105"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt="Movie Poster"
                    />
                  </Link>
                ))}
              </div>

              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
