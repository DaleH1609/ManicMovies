import React from "react";
import { useParams } from "react-router-dom";
import TVSeriesDetails from "../components/tvSeriesDetails";
import PageTemplate from "../components/templateTVSeriesPage";
import { getSeriesDetails } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie";   Redundant

const TVSeriesDetailsPage = () => {
  const { id } = useParams();
  const { data: tvSeries, error, isLoading, isError } = useQuery( ["tvSeries", { id: id }], getSeriesDetails);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tvSeries ? (
        <>
          <PageTemplate tvSeries={tvSeries}>
            <TVSeriesDetails tvSeries={tvSeries} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV series details</p>
      )}
    </>
  );
};

export default TVSeriesDetailsPage;