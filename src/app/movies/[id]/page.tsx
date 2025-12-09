"use client";

import React, { use, useEffect } from "react";

import Image from "next/image";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [details, setDetails] = React.useState<any>(null);

  const [trailers, setTrailers] = React.useState<any>(null);

  const [credits, setCredits] = React.useState<any>(null);

  const [relatedMovies, setRelatedMovies] = React.useState<any[]>([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const relatedResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=8476a7ab80ad76f0936744df0430e67c&language=en-US&page=1`
      );

      const relatedData = await relatedResponse.json();

      setRelatedMovies(relatedData.results || []);

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=8476a7ab80ad76f0936744df0430e67c&language=en-US`
      );

      const trailersResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=8476a7ab80ad76f0936744df0430e67c`
      );

      const creditsResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8476a7ab80ad76f0936744df0430e67c`
      );

      const data = await response.json();

      const trailersData = await trailersResponse.json();

      const creditsData = await creditsResponse.json();

      setDetails(data);

      setTrailers(trailersData.results || []);

      setCredits(creditsData);
    };

    fetchMovieDetails();
  }, [id]);
console.log(trailers)
  if (!details || !trailers || !credits || !relatedMovies)
    return (
      <div>
        <MovieSkeleton />
      </div>
    );

  const trailer = trailers.find(
    (t: any) => t.site === "YouTube" && t.type === "Trailer"
  );

  return (
    <div className="bg-primary text-white min-h-screen">
      <div>
        {trailer ? (
          <div className="relative w-full h-screen overflow-hidden">
            <iframe
              className="absolute w-full h-screen scale-100"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0&rel=0&modestbranding=1&showinfo=0&fs=0&disablekb=1`}
              allow="autoplay; encrypted-media"
              title="Trailer"
            ></iframe>
          </div>
        ) : (
          <div className="relative w-full h-96 ">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_X7WIOeNAFfU2gnNFPDKzwj7fcl1UA3f-A&s"
              alt="Movie placeholder"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover "
            />
          </div>
        )}
      </div>

      {details && (
        <div className="flex flex-row justify-around gap-20 p-8">
          <div className="max-w-120 w-full  relative">
            <Image
              src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
              alt={details.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-10 max-w-3xl">
            <div>
              <h1 className="text-right pr-20 text-4xl font-bold mb-4">
                {details.title}
              </h1>

              <p className="font-bold text-2xl pb-3 ">
                {details.genres.map((g: any) => g.name).join(", ")}
              </p>

              <p className="mb-2 text-secondary text-xl">{details.overview}</p>

              <p className="mb-2">
                <strong>Release Date:</strong> {details.release_date}
              </p>
            </div>

            <div>
              {details.homepage && (
                <Button
                  className="bg-secondary text-white hover:bg-secondary/80"
                  onClick={() => window.open(details.homepage, "_blank")}
                >
                  Main Page
                </Button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="p-8 space-y-4">
        <h1 className="font-bold text-2xl mb-4">Related Movies</h1>

        <div className="flex gap-5 overflow-x-auto scrollbar-hide">
          {relatedMovies.map((movie: any) => (
            <div key={movie.id} className="min-w-[180px]">
              <Link href={`/movies/${movie.id}`}>
                <div className="relative w-full aspect-2/3">
                  <Image
                    src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    sizes="(max-width: 768px) 40vw, 180px"
                    className="rounded-lg object-cover"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        {/* Cast Section */}

        <div className="p-8 space-y-4 w-full">
          <h1 className="font-bold text-2xl text-center md:text-left">Casts</h1>

          <div className="flex flex-wrap justify-center md:justify-start g6ap- md:gap-9">
            {credits?.cast

              ?.filter((member: any) => member.profile_path)

              .slice(0, 7)

              .map((member: any, index: number) => (
                <div
                  key={`${member.id}-${index}`}
                  className="flex flex-col items-center mb-4"
                >
                  <div className="relative w-40 h-60 sm:w-50 sm:h-70">
                    <Image
                      src={`https://image.tmdb.org/t/p/w1280${member.profile_path}`}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-lg object-cover"
                    />
                  </div>

                  <p className="text-center mt-2 font-medium">{member.name}</p>

                  <p className="text-sm text-gray-400 text-center">
                    {member.character}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Crew Section */}

        <div className="p-8 space-y-4 w-full">
          <h1 className="font-bold text-2xl text-center md:text-left">Crew</h1>

          {/* Added flex-wrap and justify-center for small screens */}

          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
            {credits?.crew

              ?.filter((member: any) => member.profile_path)

              .slice(0, 7)

              .map((member: any, index: number) => (
                <div
                  key={`${member.id}-${index}`}
                  className="flex flex-col items-center mb-4"
                >
                  <div className="relative w-40 h-60 sm:w-50 sm:h-70">
                    <Image
                      src={`https://image.tmdb.org/t/p/w1280${member.profile_path}`}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-lg object-cover"
                    />
                  </div>

                  <p className="text-center mt-2 font-medium">{member.name}</p>

                  <p className="text-sm text-gray-400 text-center">
                    {member.known_for_department}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function MovieSkeleton() {
  return (
    <div className="bg-primary min-h-screen p-8 ">
      <div className="w-full h-96 bg-gray-700 rounded-lg mb-8" />

      <div className="flex flex-row justify-around gap-20">
        <div className="max-w-120 w-full h-[500px] bg-gray-700 rounded-lg" />

        <div className="flex flex-col gap-6 max-w-3xl w-full">
          <div className="h-10 bg-gray-700 w-3/4 self-end" />
          <div className="h-6 bg-gray-700 w-1/2" />
          <div className="h-32 bg-gray-700 w-full" />
          <div className="h-12 bg-gray-700 w-32" />
        </div>
      </div>

      <div className="mt-20">
        <div className="h-8 bg-gray-700 w-48 mb-6" />
        <div className="flex gap-5 overflow-hidden">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div
              key={i}
              className="min-w-[180px] h-[270px] bg-gray-700 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
