import React from "react";
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";
import { getActorBio } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie";   Redundant

const ActorDetailsPage = () => {
  const { id } = useParams();
  const { data: actors, error, isLoading, isError } = useQuery( ["actors", { id: id }], getActorBio);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actors ? (
        <>
          <PageTemplate actors={actors}>
            <ActorDetails actors={actors} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actors details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;