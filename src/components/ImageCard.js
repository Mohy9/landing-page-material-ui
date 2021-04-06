import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 645,
    backgroundColor: "rgba(99, 63, 63, .8)",
    color: "#fff",
    fontFamily: "Nunito, sans-serif",
    margin: "20px",
  },
  media: {
    height: 440,
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  desc: {
    color: "#ddd",
  },
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Island"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {place.title}
          </Typography>
          <Typography variant="body2" component="p" className={classes.desc}>
            {place.desc}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
