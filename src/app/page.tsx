"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import _ from "lodash";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const MOVIE_LIMIT = 20;
const CAROUSEL_LIMIT = 5;
const Page = () => {
  const [movies, setMovies] = React.useState<any>(null);
  const [randomMovies, setRandomMovies] = React.useState<any[]>([]);
  const [topRated, setTopRated] = React.useState<any>(null);
  const [recommended, setRecommended] = React.useState<any>(null);
  const scrollRefPopular = useRef<HTMLDivElement>(null!);
  const scrollRefTopRated = useRef<HTMLDivElement>(null!);
  const scrollRefUpcoming = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=8476a7ab80ad76f0936744df0430e67c&language=en-US&page=1`
      );
      const recommendedResponse = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=8476a7ab80ad76f0936744df0430e67c`
      );
      const topRatedResponse = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=8476a7ab80ad76f0936744df0430e67c"
      );

      const recommended = await recommendedResponse.json();
      setRecommended(recommended.results);

      const topRated = await topRatedResponse.json();
      setTopRated(topRated.results);
      const data = await response.json();
      setMovies(data.results);
      setRandomMovies(
        _.shuffle(data.results).splice(
          Math.round(Math.random() * (MOVIE_LIMIT / CAROUSEL_LIMIT) - 1) *
            CAROUSEL_LIMIT,
          CAROUSEL_LIMIT
        )
      );
    };
    fetchData();
  }, []);
  if (!movies || !topRated || !recommended)
    return (
      <div className=" w-full h-screen flex justify-center align-middle">
        Loading...
      </div>
    );

  const scroll = (
    direction: "left" | "right",
    ref: React.RefObject<HTMLDivElement>
  ) => {
    if (!ref.current) return;
    const width = ref.current.clientWidth;
    const amount = width * 0.8;

    ref.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };
  const witdh = "w-55";
  return (
    <>
      <div className=" bg-primary w-full h-screen">
        <Carousel
          className="w-full h-screen relative"
          opts={{ loop: true }}
          style={{ overflow: "hidden" }}
        >
          <CarouselContent>
            {randomMovies.map((movie) => (
              <CarouselItem key={movie.id} className="relative w-full h-screen">
                <Link
                  href={`movies/${movie.id}`}
                  className="block w-full h-full relative"
                >
                  <div className="absolute inset-0 flex flex-col justify-center pl-10 w-2/3 h-full bg-linear-to-r from-black/80 to-black/20 z-10">
                    <h1 className="text-white font-bold text-3xl mb-4">
                      {movie.title}
                    </h1>
                    <p className="text-white font-semibold text-lg max-w-2xl line-clamp-3">
                      {movie.overview}
                    </p>
                  </div>

                  <Image
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/60 border-0 rounded-full p-2 z-20" />
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/60 border-0 rounded-full p-2 z-20" />
        </Carousel>
        <div className="w-full bg-primary p-4 relative">
          <h1 className="text-white text-3xl mb-4">Popular Movies</h1>

          <Button
            variant="secondary"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 hover:bg-black/80"
            onClick={() => scroll("left", scrollRefPopular)}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 hover:bg-black/80"
            onClick={() => scroll("right", scrollRefPopular)}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>

          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div
              ref={scrollRefPopular}
              className="flex space-x-4 snap-x snap-mandatory overflow-x-auto p-4 scroll-smooth scrollbar-hide"
            >
              {movies.map((movie: any) => (
                <Link
                  href={`movies/${movie.id}`}
                  key={movie.id}
                  className="shrink-0 snap-center"
                >
                  <Image
                    className={`${witdh} h-auto transition-all duration-200 hover:scale-105`}
                    src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                    alt="Movie Poster"
                    width={500}
                    height={750}
                    unoptimized
                  />
                </Link>
              ))}
            </div>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <div className="w-full bg-primary p-4 relative">
          <h1 className="text-white text-3xl mb-4">Top Rated</h1>

          <Button
            variant="secondary"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 hover:bg-black/80"
            onClick={() => scroll("left", scrollRefTopRated)}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 hover:bg-black/80"
            onClick={() => scroll("right", scrollRefTopRated)}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>

          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div
              ref={scrollRefTopRated}
              className="flex space-x-4 snap-x snap-mandatory overflow-x-auto p-4 scroll-smooth scrollbar-hide"
            >
              {topRated.map((movie: any) => (
                <Link
                  href={`movies/${movie.id}`}
                  key={movie.id}
                  className="shrink-0 snap-center"
                >
                  <Image
                    className={`${witdh} h-auto transition-all duration-200 hover:scale-105`}
                    src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                    alt="Movie Poster"
                    width={500}
                    height={750}
                    unoptimized
                  />
                </Link>
              ))}
            </div>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        <div className="w-full bg-primary p-4 relative">
          <h1 className="text-white text-3xl mb-4">Now Playing</h1>

          <Button
            variant="secondary"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 hover:bg-black/80"
            onClick={() => scroll("left", scrollRefUpcoming)}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>

          <Button
            variant="secondary"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 hover:bg-black/80"
            onClick={() => scroll("right", scrollRefUpcoming)}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>

          <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <div
              ref={scrollRefUpcoming}
              className="flex space-x-4 snap-x snap-mandatory overflow-x-auto p-4 scroll-smooth scrollbar-hide"
            >
              {recommended.map((movie: any) => (
                <Link
                  href={`movies/${movie.id}`}
                  key={movie.id}
                  className="shrink-0 snap-center"
                >
                  <Image
                    className={`${witdh} h-auto transition-all duration-200 hover:scale-105`}
                    src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                    alt="Movie Poster"
                    width={500}
                    height={750}
                    unoptimized
                  />
                </Link>
              ))}
            </div>

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default Page;
