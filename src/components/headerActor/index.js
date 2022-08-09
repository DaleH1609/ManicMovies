import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useNavigate } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: theme.spacing(1.5),
  },
  tagLine: {
    fontSize: "1.5rem",
  },
}));

const ActorHeader = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const actors = props.actors;

  return (
    <Paper component="div" className={classes.root}>
      <IconButton aria-label="go back"  onClick={() => navigate(-1)}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {actors.name}
        <a href={actors.homepage}>
          <HomeIcon color="primary" />
        </a>
        <br />
      </Typography>
      <IconButton aria-label="go forward"  onClick={() => navigate(1)}>
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default ActorHeader;