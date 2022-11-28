import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'


const AddToAddList = ({ tvs }) => {
  const context = useContext(MoviesContext);

  const handleAddToAddListTV = (e) => {
    e.preventDefault();
    context.addToAddListTV(tvs);
  };

  return (
    <IconButton aria-label="add to addList" onClick={handleAddToAddListTV}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToAddList;