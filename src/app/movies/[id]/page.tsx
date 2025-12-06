"use client";
import React from "react";
import { use, useEffect } from "react";

export default function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [details, setDetails] = React.useState<any>(null);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=8476a7ab80ad76f0936744df0430e67c&language=en-US`
      );
      const data = await response.json();
      setDetails(data);
    };
    fetchMovieDetails();
  }, [id]);
  console.log(details);

  if (!details) return <div>Loading...</div>;
  return (
    <div>
      <p>{id}</p>
    </div>
  );
}
