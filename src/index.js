import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Page from "./pages/test";
import MoviePage from "./pages/movieDetailsPage";
import TVSeriesPage from "./pages/tvSeriesPage.js";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
//import {Link} from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import MovieUpcomingPage from "./pages/movieUpcomingPage"
import TvShowPage from "./pages/tvShowPage"
import ActorShowPage from "./pages/actorShowPage"
import MoviesContextProvider from "./contexts/moviesContext";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import PlaylistMoviePage from "./pages/playlistMoviesPage";
import { initializeApp } from 'firebase/app';

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
    <MoviesContextProvider>
    <Routes>
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/" element={<Page />} />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route exact path="/movies/playlist" element={<PlaylistMoviePage />} />
        <Route path="/pages/homepage" element={ <HomePage/> } />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/tv/:id" element={<TVSeriesPage />} />
        <Route path="/pages/moviesupcomingpage" element={<MovieUpcomingPage />} />
        <Route path="/pages/actorShowPage" element={<ActorShowPage />} />
        <Route path="/pages/tvshowpage" element={<TvShowPage />} />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
      </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};


const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);