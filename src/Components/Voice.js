import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import React, { useRef } from "react";
// const audioRef = useRef();
// https://newbedev.com/react-js-audio-src-is-updating-on-setstate-but-the-audio-playing-doesn-t-change

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function Voice({ json }) {
  const classes = useStyles();

  if (json !== 0) {
    return (
      <Box p={2}>
        <Card variant="outlined" className={classes.root}>
          <Box pt={3}>
            <Typography className={classes.pos} color="textSecondary">
              Pronunciation
            </Typography>
            <audio controls>
              <source
                src={json[0]["phonetics"][0]["audio"]}
                type="audio/mpeg"
              />
            </audio>
          </Box>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            ></Typography>
            <Typography variant="h5" component="h2">
              {json[0]["phonetics"][0]["text"]}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {json[0]["meanings"][0]["partOfSpeech"]}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  } else {
    return <div></div>;
  }
}
