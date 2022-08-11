import React from "react";
import SiteHeader from './components/siteHeader'
import ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import UpcomingMoviesPage from "./pages/UpcomingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviesContextProvider from "./contexts/moviesContext";
import PopularActorsPage from "./pages/popularActorsPage.js";
import ActorsDetailsPage from "./pages/actorsDetailsPage.js";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PopularTVSeriesPage from "./pages/popularTVSeriesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
        <Route path="/movies/favourites" element={<FavouriteMoviesPage/>} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/actors/popular" element={<PopularActorsPage />} />
        <Route path="/actors/:id" element={<ActorsDetailsPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path='/tvSeries/popular' element={<PopularTVSeriesPage/>} /> 
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));