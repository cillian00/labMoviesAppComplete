import React, { useState } from "react";


export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [playlists, setAddList] = useState( [] )
  const [addListTV, setAddListTV] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToAddList = (movie) => {
    let newAddList = [...playlists];
    if (!playlists.includes(movie.id)) {
      newAddList.push(movie.id);
      console.log(newAddList)
    }
    setAddList(newAddList);
  };

  
  const addToAddListTV = (tvs) => {
    let newAddListTV = [...addListTV];
    if (!addListTV.includes(tvs.id)) {
      newAddListTV.push(tvs.id);
      console.log(newAddListTV)
    }
    setAddListTV(newAddListTV);
  };


  
  return (
    <MoviesContext.Provider
      value={{
        favourites,
        playlists,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToAddList,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;