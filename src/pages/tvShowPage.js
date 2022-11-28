import React from "react";
import { getTVShows} from "../api/tmdb-api";
import PageTemplate from '../components/tvListPageTemplate';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PlaylistAddIcon from '../components/cardIcons/addToAddListTV'

const TvShowPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('tv Show', getTVShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  // Redundant, but necessary to avoid app crashing.
  const addList = tvs.filter(m => m.addList)
  localStorage.setItem('addListTV', JSON.stringify(addList))

  return (
    <PageTemplate
      title="Popular TV Shows"
      tvs={tvs}
      action={(tvs) => {
        return <PlaylistAddIcon tvs={{tvs}} />
      }}
    />
);
};
export default TvShowPage;