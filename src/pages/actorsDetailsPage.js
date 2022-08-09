import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie";   Redundant

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <MovieDetails actor={actor} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;