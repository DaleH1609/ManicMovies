import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import ActorList from "../actorList";

const useStyles = makeStyles((theme) =>  ({
    root: {
        backgroundColor: "#bfbfbf",
        paddingTop: theme.spacing(7),
      },
  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ActorListPageTemplate({ actors, title, action }) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);


  let displayedActors = actors

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <ActorList action={action} actors={displayedActors} />
        </Grid>
      </Grid>
      <Fab
        color='secondary'
        variant='extended'
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
      </Drawer>
    </>
  );
}
export default ActorListPageTemplate;