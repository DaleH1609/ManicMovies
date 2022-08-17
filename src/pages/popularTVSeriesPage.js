import React from "react";
import TVSeriesListPageTemplate from "../components/templateTVSeriesListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getTVSeries } from "../api/tmdb-api";
import { getTVSeriesImages } from '../api/tmdb-api';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';


const PopularTVSeriesPage = (props) => {
const { data, error, isLoading, isError } = useQuery('tvSeries', getTVSeries, getTVSeriesImages)

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvSeries = data.results;

  return (
    <TVSeriesListPageTemplate
      title='Popular TV Series'
      tvSeries={tvSeries}
      action={(tvSeries) => {
        return <AddToFavouritesIcon tvSeries={tvSeries} />
      }}
    />
  );
};

export default PopularTVSeriesPage;