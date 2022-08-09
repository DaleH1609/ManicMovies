import React from "react";
import ActorsListPageTemplate from "../components/templateActorListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getPopularActors } from "../api/tmdb-api";
import { getActorImages } from '../api/tmdb-api';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';


const PopularActorsPage = (props) => {
const { data, error, isLoading, isError } = useQuery('actors', getPopularActors, getActorImages)

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;
  

  const favouriteActors = actors.filter(p => p.favouriteActors)
  localStorage.setItem('favouriteActors', JSON.stringify(favouriteActors))

  return (
    <ActorsListPageTemplate
      title='Popular Actors'
      actors={actors}
      action={(actor) => {
        return <AddToFavouritesIcon actor={actor} />
      }}
    />
  );
};

export default PopularActorsPage;