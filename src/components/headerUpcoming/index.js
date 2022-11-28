import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'

const HeaderTVShow = (props) => {
  const movies = props.movies;
  const playlists = JSON.parse(localStorage.getItem("playlists")); 
  const navigate = useNavigate();



  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <div>
        {
          movies.playlists ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <PlaylistAddIcon />
            </Avatar>
          ) : (
            <Avatar sx={{ backgroundColor: 'blue' }}>
              <PlaylistAddIcon />
            </Avatar>
          )
        }
        </div>
      <Typography variant="h4" component="h3">
        {movies.title}
        <a href={movies.homepage}>
          <HomeIcon color="primary" />
        </a>
        <br />
        <span sx={{ fontSize: "1.5rem" }}>{`   "${movies.tagline}"`} </span>
      </Typography>
      <IconButton aria-label="go forward" onClick={() => navigate(+1) } >
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default HeaderTVShow;