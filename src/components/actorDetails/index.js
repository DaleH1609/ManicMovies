import React from "react";
import Typography from "@material-ui/core/Typography";
import Chip from '@material-ui/core/Chip';
import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {  //New
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const ActorDetails = ( {actors}) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>
      <Typography variant="h6" component="p">
        {actors.biography}
      </Typography>
      <div className={classes.chipRoot}>
        <Paper component='ul' className={classes.chipSet}>
          <Chip
            icon={<AccessTimeIcon />}
            label={`Actors Birthday: ${actors.birthday}`} 
          />
        </Paper>
      </div>
    </>
  );
};
export default ActorDetails ;